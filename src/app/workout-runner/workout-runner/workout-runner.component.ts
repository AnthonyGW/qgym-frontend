import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { IHearThisTrack } from 'src/app/interfaces'
import { Exercise, ExerciseChangedEvent, WorkoutPlan } from '../../core/model'
import { AuthenticationService } from '../../core/services/authentication.service'

@Component({
  selector: 'app-workout-runner',
  templateUrl: './workout-runner.component.html',
  styles: [],
})
export class WorkoutRunnerComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    public authService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    if (
      localStorage.getItem('isSignedIn') &&
      localStorage.getItem('isSignedIn') === 'true'
    ) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  @Input()
  workoutPlan: WorkoutPlan
  @Input()
  restExercise: Exercise
  @Input()
  musicData: IHearThisTrack
  workoutTimeRemaining: number
  currentExerciseIndex: number
  currentExercise: Exercise
  currentExerciseDuration: number
  exerciseRunningDuration: number
  exerciseTrackingInterval: number
  workoutPaused: boolean
  safeImageURL: SafeResourceUrl
  workoutMuted = false
  isFinished: boolean
  isSignedIn: boolean
  private imageUrlPrefix = '//s3.amazonaws.com/assets.quickgym.xyz/exercise-images/'

  @Output()
  exercisePaused: EventEmitter<number> = new EventEmitter<number>()
  @Output()
  exerciseResumed: EventEmitter<number> = new EventEmitter<number>()
  @Output()
  exerciseChanged: EventEmitter<ExerciseChangedEvent> = new EventEmitter<
    ExerciseChangedEvent
  >()
  @Output()
  workoutStarted: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>()
  @Output()
  workoutComplete: EventEmitter<WorkoutPlan> = new EventEmitter<WorkoutPlan>()
  @Output()
  workoutMusicToggle: EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit() {
    this.start()
  }

  start() {
    this.isFinished = false
    this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration()
    this.currentExerciseIndex = 0
    clearInterval(this.exerciseTrackingInterval)
    this.startExercise(this.workoutPlan.exercises[this.currentExerciseIndex])
    this.workoutStarted.emit(this.workoutPlan)
  }

  startExercise(exercise: Exercise) {
    this.currentExercise = exercise
    this.safeImageURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.imageUrlPrefix + this.currentExercise.image
    )
    this.exerciseRunningDuration = 0
    this.startExerciseTimeTracking()
  }

  restartExercise() {
    this.workoutTimeRemaining += this.exerciseRunningDuration
    this.exerciseRunningDuration = 0
    clearInterval(this.exerciseTrackingInterval)
    this.startExerciseTimeTracking()
  }

  startExerciseTimeTracking() {
    this.currentExerciseDuration = 0
    if (this.currentExercise === this.restExercise) {
      this.currentExerciseDuration = this.workoutPlan.restBetweenExercise
    } else {
      this.currentExerciseDuration = this.workoutPlan.exerciseDuration
    }
    this.exerciseTrackingInterval = window.setInterval(() => {
      if (this.exerciseRunningDuration >= this.currentExerciseDuration) {
        clearInterval(this.exerciseTrackingInterval)
        const next: Exercise = this.getNextExercise()
        if (next) {
          if (next !== this.restExercise) {
            this.currentExerciseIndex++
          }
          this.startExercise(next)
          this.exerciseChanged.emit(
            new ExerciseChangedEvent(next, this.getNextExercise())
          )
        } else {
          this.isFinished = true
          this.workoutComplete.emit(this.workoutPlan)
        }
        return
      }
      ++this.exerciseRunningDuration
      --this.workoutTimeRemaining
    }, 1000)
  }

  getNextExercise(): Exercise {
    let nextExercise: Exercise = null
    if (this.currentExercise === this.restExercise) {
      nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1]
    } else if (this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
      nextExercise = this.restExercise
    }
    return nextExercise
  }

  pause() {
    clearInterval(this.exerciseTrackingInterval)
    this.workoutPaused = true
    this.exercisePaused.emit(this.currentExerciseIndex)
  }

  resume() {
    this.startExerciseTimeTracking()
    this.workoutPaused = false
    this.exerciseResumed.emit(this.currentExerciseIndex)
  }

  pauseResumeToggle() {
    if (this.workoutPaused) {
      this.resume()
    } else {
      this.pause()
    }
  }

  onKeyPressed(event: KeyboardEvent) {
    if (event.which === 80 || event.which === 112) {
      this.pauseResumeToggle()
    }
  }

  toggleMute() {
    this.workoutMuted = !this.workoutMuted
    this.workoutMusicToggle.emit(this.workoutMuted)
  }
}

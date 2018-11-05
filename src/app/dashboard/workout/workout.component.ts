import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { WorkoutMusicService } from 'src/app/core/services/workout-music.service'
import { WorkoutBuilderService } from '../../core/services/workout-builder.service'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
})
export class WorkoutComponent implements OnInit {
  searchResults: any
  searchTerm = ''
  selectedExercise = 'jumpingJacks'
  removeTouched = false
  @Output()
  saveBuildingWorkout: EventEmitter<any> = new EventEmitter()
  musicPlaying = false
  selectedTrack: any

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public workoutBuilderService: WorkoutBuilderService,
    private musicService: WorkoutMusicService
  ) {}

  durations = [
    { title: '5 seconds', value: 5 },
    { title: '10 seconds', value: 10 },
    { title: '15 seconds', value: 15 },
    { title: '30 seconds', value: 30 },
    { title: '45 seconds', value: 45 },
    { title: '1 minute', value: 60 },
    { title: '1 minute 15 seconds', value: 75 },
    { title: '1 minute 30 seconds', value: 90 },
    { title: '1 minute 45 seconds', value: 105 },
    { title: '2 minutes', value: 120 },
    { title: '2 minutes 15 seconds', value: 135 },
    { title: '2 minutes 30 seconds', value: 150 },
    { title: '2 minutes 45 seconds', value: 165 },
    { title: '3 minutes', value: 180 },
    { title: '3 minutes 15 seconds', value: 195 },
    { title: '3 minutes 30 seconds', value: 210 },
    { title: '3 minutes 45 seconds', value: 225 },
    { title: '4 minutes', value: 240 },
    { title: '4 minutes 15 seconds', value: 255 },
    { title: '4 minutes 30 seconds', value: 270 },
    { title: '4 minutes 45 seconds', value: 285 },
    { title: '5 minutes', value: 300 },
  ]

  ngOnInit() {}

  searchMusic() {
    this.musicService.searchMusicTracks(this.searchTerm).subscribe(res => {
      this.searchResults = res
      return res
    })
  }

  addExercise() {
    const exerciseBuild = this.workoutBuilderService.allExercises.find(
      exercise => exercise.name === this.selectedExercise
    )
    this.workoutBuilderService.addExercise(exerciseBuild)
  }

  moveExerciseTo(exerciseIndex: number, location: any) {
    this.workoutBuilderService.moveExerciseTo(exerciseIndex, location)
  }

  removeExercise(exerciseIndex: number) {
    this.removeTouched = true
    this.workoutBuilderService.removeExercise(exerciseIndex)
  }

  save(formWorkout: NgForm) {
    this.workoutBuilderService.submitted = true
    if (!formWorkout.valid) {
      return
    } else {
      // Close the modal
      this.workoutBuilderService.finishedBuilding = true
      this.saveBuildingWorkout.emit(null)
    }
  }

  // For closing the modal when the user clicks outside the dialog
  finishBuilding() {
    this.workoutBuilderService.finishedBuilding = true
  }
}

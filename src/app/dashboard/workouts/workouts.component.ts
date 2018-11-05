import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/core/services/authentication.service'
import { WorkoutBuilderService } from 'src/app/core/services/workout-builder.service'
import { WorkoutPlan } from '../../core/model'
import { WorkoutService } from '../../core/services/workout.service'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
})
export class WorkoutsComponent implements OnInit {
  workoutList: Array<WorkoutPlan> = []
  constructor(
    public router: Router,
    public workoutService: WorkoutService,
    public workoutBuilderService: WorkoutBuilderService
  ) {}

  ngOnInit() {
    this.retrieveList()
  }

  retrieveList(refresh = false) {
    this.workoutService.getWorkouts(refresh).subscribe(
      (data: WorkoutPlan[]) => {
        this.workoutList = data
      },
      error => {
        if (
          error.error['error'] &&
          error.error['error'].message === 'Access denied. User must be logged in.'
        ) {
          AuthenticationService.isSignedIn = false
          AuthenticationService.hasError = true
          this.router.navigate(['/home/signin'])
        } else {
          AuthenticationService.isSignedIn = false
          AuthenticationService.hasError = true
          this.router.navigate(['/error'])
        }
      }
    )
  }

  onSelect(workout: WorkoutPlan) {
    this.router.navigate(['/workout', workout.name.toLowerCase().replace(' ', '-')])
  }

  buildWorkout(workoutName: string) {
    this.workoutBuilderService.buildingWorkout = true
    this.workoutBuilderService.submitted = false
    this.workoutBuilderService.finishedBuilding = false
    this.workoutBuilderService.startBuilding(workoutName)
    console.log('started building: ', this.workoutBuilderService.workoutBuild)
  }

  saveWorkout() {
    const result = this.workoutBuilderService.save()
    result.subscribe(data => {
      this.retrieveList(true)
      this.workoutBuilderService.workoutBuild = null
    })
  }

  deleteWorkout(workoutId) {
    const result = this.workoutBuilderService.delete(workoutId)
    result.subscribe(data => {
      this.retrieveList(true)
    })
  }
}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Exercise, WorkoutPlan } from 'src/app/core/model'
import { AuthenticationService } from 'src/app/core/services/authentication.service'
import { WorkoutService } from 'src/app/core/services/workout.service'

@Component({
  selector: 'app-workout-container',
  templateUrl: './workout-container.component.html',
  styles: [],
})
export class WorkoutContainerComponent implements OnInit {
  sub: any
  workout: WorkoutPlan
  restExercise: Exercise
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public workoutService: WorkoutService
  ) {}

  ngOnInit() {
    if (AuthenticationService.hasError) {
      this.router.navigate(['error'])
    }
    this.workout = this.route.snapshot.data['workout']
    this.restExercise = this.workoutService.restExercise
  }
}

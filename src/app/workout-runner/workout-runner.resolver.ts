import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { take } from 'rxjs/operators'
import { WorkoutPlan } from '../core/model'
import { AuthenticationService } from '../core/services/authentication.service'
import { WorkoutService } from '../core/services/workout.service'

@Injectable()
export class WorkoutRunnerResolver implements Resolve<WorkoutPlan> {
  public workout: WorkoutPlan
  public workouts: WorkoutPlan[]

  constructor(public workoutService: WorkoutService, public router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const workoutParam = route.paramMap.get('workoutName')
    if (workoutParam === '8-minute-workout' && !AuthenticationService.isSignedIn) {
      this.workout = this.workoutService.basicWorkout
      return this.workout
    } else if (workoutParam !== '8-minute-workout' && !AuthenticationService.isSignedIn) {
      this.router.navigate(['error'])
      return null
    }
    return this.workoutService.getWorkout(workoutParam).pipe(take(1))
  }
}

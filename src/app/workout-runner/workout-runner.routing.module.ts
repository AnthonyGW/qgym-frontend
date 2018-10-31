import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WorkoutContainerComponent } from './workout-container/workout-container.component'
import { WorkoutLoaderComponent } from './workout-loader.component'
import { WorkoutRunnerResolver } from './workout-runner.resolver'

const routes: Routes = [
  {
    path: 'workout',
    component: WorkoutLoaderComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/error' },
      {
        path: ':workoutName',
        component: WorkoutContainerComponent,
        resolve: { workout: WorkoutRunnerResolver },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRunnerRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard, AuthWorkoutGuard } from './core/auth.guard'
import { ErrorsComponent } from './core/errors/errors.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './landing/landing.module#LandingModule',
  },
  {
    path: 'workout',
    loadChildren: './workout-runner/workout-runner.module#WorkoutRunnerModule',
    canActivateChild: [AuthWorkoutGuard],
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivateChild: [AuthGuard],
  },
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

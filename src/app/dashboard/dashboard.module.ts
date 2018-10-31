import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { WorkoutBuilderService } from '../core/services/workout-builder.service'
import { SharedModule } from '../shared/shared.module'
import { DashboardComponent } from './dashboard.component'
import { DashboardRoutingModule } from './dashboard.routing.module'
import { WorkoutComponent } from './workout/workout.component'
import { WorkoutsComponent } from './workouts/workouts.component'

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule, FormsModule],
  declarations: [DashboardComponent, WorkoutComponent, WorkoutsComponent],
  providers: [WorkoutBuilderService],
})
export class DashboardModule {}

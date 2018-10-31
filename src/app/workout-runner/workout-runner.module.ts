import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component'
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component'
import { VideoPlayerComponent } from './video-player/video-player.component'
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component'
import { WorkoutContainerComponent } from './workout-container/workout-container.component'
import { WorkoutLoaderComponent } from './workout-loader.component'
import { WorkoutRunnerResolver } from './workout-runner.resolver'
import { WorkoutRunnerRoutingModule } from './workout-runner.routing.module'
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component'

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule, WorkoutRunnerRoutingModule],
  declarations: [
    WorkoutRunnerComponent,
    ExerciseDescriptionComponent,
    VideoPlayerComponent,
    VideoDialogComponent,
    WorkoutAudioComponent,
    WorkoutContainerComponent,
    WorkoutLoaderComponent,
  ],
  entryComponents: [VideoDialogComponent],
  providers: [WorkoutRunnerResolver],
})
export class WorkoutRunnerModule {}

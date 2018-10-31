import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { AuthenticationService } from 'src/app/core/services/authentication.service'
import { AuthenticationServiceMock } from 'src/app/core/services/authentication.service.mock'
import { WorkoutMusicService } from 'src/app/core/services/workout-music.service'
import { WorkoutMusicServiceMock } from 'src/app/core/services/workout-music.service.mock'
import { WorkoutService } from 'src/app/core/services/workout.service'
import { WorkoutServiceMock } from 'src/app/core/services/workout.service.mock'
import { SharedModule } from 'src/app/shared/shared.module'
import { ExerciseDescriptionComponent } from '../exercise-description/exercise-description.component'
import { VideoDialogComponent } from '../video-player/video-dialog/video-dialog.component'
import { VideoPlayerComponent } from '../video-player/video-player.component'
import { WorkoutRunnerComponent } from './workout-runner.component'

describe('WorkoutRunnerComponent', () => {
  let component: WorkoutRunnerComponent
  let fixture: ComponentFixture<WorkoutRunnerComponent>
  const fakeActivatedRoute = { snapshot: { data: {} } } as ActivatedRoute

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorkoutRunnerComponent,
        ExerciseDescriptionComponent,
        VideoPlayerComponent,
        VideoDialogComponent,
      ],
      imports: [SharedModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        {
          provide: AuthenticationService,
          useClass: AuthenticationServiceMock,
        },
        {
          provide: WorkoutService,
          useClass: WorkoutServiceMock,
        },
        {
          provide: WorkoutMusicService,
          useClass: WorkoutMusicServiceMock,
        },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutRunnerComponent)
    component = fixture.componentInstance
    const workoutService = new WorkoutServiceMock()
    const musicService = new WorkoutMusicServiceMock()
    component.workoutPlan = workoutService.basicWorkout
    component.restExercise = workoutService.restExercise
    component.musicData = musicService.mockTrack
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

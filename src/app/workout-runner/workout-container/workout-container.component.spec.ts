import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { WorkoutMusicService } from 'src/app/core/services/workout-music.service'
import { WorkoutMusicServiceMock } from 'src/app/core/services/workout-music.service.mock'
import { WorkoutService } from 'src/app/core/services/workout.service'
import { WorkoutServiceMock } from 'src/app/core/services/workout.service.mock'
import { WorkoutRunnerModule } from '../workout-runner.module'
import { WorkoutContainerComponent } from './workout-container.component'

describe('WorkoutContainerComponent', () => {
  let component: WorkoutContainerComponent
  let fixture: ComponentFixture<WorkoutContainerComponent>
  const workoutService = new WorkoutServiceMock()
  const fakeActivatedRoute = {
    snapshot: {
      url: [],
      data: {
        workout: workoutService.basicWorkout,
      },
    },
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [WorkoutRunnerModule, HttpClientTestingModule],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          },
        },
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        {
          provide: WorkoutService,
          useValue: WorkoutServiceMock,
        },
        {
          provide: WorkoutMusicService,
          useClass: WorkoutMusicServiceMock,
        },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    const runnerDebugElement = fixture.debugElement.query(By.css('app-workout-runner'))
    const audioDebugElement = fixture.debugElement.query(By.css('app-workout-audio'))
    const musicService = new WorkoutMusicServiceMock()
    runnerDebugElement.componentInstance.restExercise = workoutService.restExercise
    audioDebugElement.componentInstance.musicData = musicService.mockTrack
    audioDebugElement.componentInstance.trackId = workoutService.basicWorkout.track
    expect(component).toBeTruthy()
  })
})

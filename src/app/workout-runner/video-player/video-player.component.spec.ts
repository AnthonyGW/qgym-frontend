import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { WorkoutVideosService } from 'src/app/core/services/workout-videos.service'
import { WorkoutVideosServiceMock } from 'src/app/core/services/workout-videos.service.mock'
import { WorkoutRunnerModule } from '../workout-runner.module'
import { VideoPlayerComponent } from './video-player.component'

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent
  let fixture: ComponentFixture<VideoPlayerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [WorkoutRunnerModule],
      providers: [{ provide: WorkoutVideosService, useClass: WorkoutVideosServiceMock }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

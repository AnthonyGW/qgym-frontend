import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { WorkoutVideosService } from 'src/app/core/services/workout-videos.service'
import { WorkoutVideosServiceMock } from 'src/app/core/services/workout-videos.service.mock'
import { WorkoutRunnerModule } from '../../workout-runner.module'
import { VideoDialogComponent } from './video-dialog.component'

describe('VideoDialogComponent', () => {
  let component: VideoDialogComponent
  let fixture: ComponentFixture<VideoDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [WorkoutRunnerModule],
      providers: [{ provide: WorkoutVideosService, useClass: WorkoutVideosServiceMock }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDialogComponent)
    component = fixture.componentInstance
    const videosService = new WorkoutVideosServiceMock()
    component.video = videosService.mockVideoList
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

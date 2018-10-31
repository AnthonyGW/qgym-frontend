import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { WorkoutMusicService } from 'src/app/core/services/workout-music.service'
import { WorkoutMusicServiceMock } from 'src/app/core/services/workout-music.service.mock'
import { WorkoutRunnerModule } from '../workout-runner.module'
import { WorkoutAudioComponent } from './workout-audio.component'

describe('WorkoutAudioComponent', () => {
  let component: WorkoutAudioComponent
  let fixture: ComponentFixture<WorkoutAudioComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [WorkoutRunnerModule],
      providers: [{ provide: WorkoutMusicService, useClass: WorkoutMusicServiceMock }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAudioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

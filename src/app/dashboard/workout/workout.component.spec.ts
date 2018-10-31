import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { WorkoutBuilderService } from 'src/app/core/services/workout-builder.service'
import { WorkoutBuilderServiceMock } from 'src/app/core/services/workout-builder.service.mock'
import { WorkoutMusicService } from 'src/app/core/services/workout-music.service'
import { WorkoutMusicServiceMock } from 'src/app/core/services/workout-music.service.mock'
import { WorkoutService } from 'src/app/core/services/workout.service'
import { WorkoutServiceMock } from 'src/app/core/services/workout.service.mock'
import { SharedModule } from 'src/app/shared/shared.module'
import { WorkoutComponent } from './workout.component'

describe('WorkoutComponent', () => {
  let component: WorkoutComponent
  let fixture: ComponentFixture<WorkoutComponent>
  const fakeActivatedRoute = { snapshot: { data: {} } } as ActivatedRoute

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          },
        },
        {
          provide: WorkoutBuilderService,
          useClass: WorkoutBuilderServiceMock,
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
      imports: [FormsModule, SharedModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent)
    component = fixture.componentInstance
    const workoutBuilder = new WorkoutBuilderServiceMock()
    component.workoutBuilderService.workoutBuild = workoutBuilder.startBuilding('')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

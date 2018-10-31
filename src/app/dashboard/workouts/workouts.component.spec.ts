import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { WorkoutBuilderService } from 'src/app/core/services/workout-builder.service'
import { WorkoutBuilderServiceMock } from 'src/app/core/services/workout-builder.service.mock'
import { WorkoutService } from 'src/app/core/services/workout.service'
import { WorkoutServiceMock } from 'src/app/core/services/workout.service.mock'
import { SharedModule } from 'src/app/shared/shared.module'
import { WorkoutComponent } from '../workout/workout.component'
import { WorkoutsComponent } from './workouts.component'

describe('WorkoutsComponent', () => {
  let component: WorkoutsComponent
  let fixture: ComponentFixture<WorkoutsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutsComponent, WorkoutComponent],
      imports: [SharedModule, FormsModule],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          },
        },
        {
          provide: WorkoutService,
          useClass: WorkoutServiceMock,
        },
        {
          provide: WorkoutBuilderService,
          useValue: WorkoutBuilderServiceMock,
        },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

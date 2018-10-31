import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { WorkoutBuilderService } from './workout-builder.service'
import { WorkoutService } from './workout.service'

describe('WorkoutBuilderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkoutBuilderService, WorkoutService],
    }))

  it('should be created', () => {
    const service: WorkoutBuilderService = TestBed.get(WorkoutBuilderService)
    expect(service).toBeTruthy()
  })
})

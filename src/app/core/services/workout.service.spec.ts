import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { WorkoutService } from './workout.service'

describe('WorkoutService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkoutService],
    }))

  it('should be created', () => {
    const service: WorkoutService = TestBed.get(WorkoutService)
    expect(service).toBeTruthy()
  })
})

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { WorkoutVideosService } from './workout-videos.service'

describe('WorkoutVideosService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkoutVideosService],
    }))

  it('should be created', () => {
    const service: WorkoutVideosService = TestBed.get(WorkoutVideosService)
    expect(service).toBeTruthy()
  })
})

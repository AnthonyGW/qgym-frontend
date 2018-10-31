import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { WorkoutMusicService } from './workout-music.service'

describe('WorkoutMusicService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkoutMusicService],
    }))

  it('should be created', () => {
    const service: WorkoutMusicService = TestBed.get(WorkoutMusicService)
    expect(service).toBeTruthy()
  })
})

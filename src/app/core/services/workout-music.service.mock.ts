import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class WorkoutMusicServiceMock {
  mockTrack = {
    permalink: 'sample.mp3',
    description: 'sample',
    genre: 'sample',
    title: 'sample',
    permalink_url: 'sample',
    artwork_url: 'sample.jpg',
    user: {
      username: 'sample',
      permalink: 'assets',
      permalink_url: 'sample',
      avatar_url: 'sample.jpg',
    },
    stream_url: 'sample.mp3',
    preview_url: 'assets/sample.mp3',
  }

  searchMusicTracks(searchParam) {
    return of([this.mockTrack, this.mockTrack])
  }

  getSingleTrack(trackId, refresh) {
    return of(this.mockTrack)
  }
}

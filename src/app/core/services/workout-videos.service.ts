import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IYoutubeVideoSearch } from '../../interfaces'

@Injectable({
  providedIn: 'root',
})
export class WorkoutVideosService implements IWorkoutVideosService {
  baseUrl = environment.videosApi
  apiKey = environment.videosApiKey
  constructor(private httpClient: HttpClient) {}
  searchYoutubeVideos(exerciseName): Observable<IYoutubeVideoSearch> {
    return this.httpClient.get<IYoutubeVideoSearch>(
      this.baseUrl +
        `?q=${exerciseName}` +
        `&maxResults=3` +
        `&part=snippet` +
        `&key=` +
        this.apiKey
    )
  }
}

export interface IWorkoutVideosService {
  searchYoutubeVideos(string): Observable<IYoutubeVideoSearch>
}

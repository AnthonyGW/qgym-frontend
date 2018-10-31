import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IYoutubeVideoSearch } from '../../interfaces'

@Injectable({
  providedIn: 'root',
})
export class WorkoutVideosService implements IWorkoutVideosService {
  constructor(private httpClient: HttpClient) {}
  searchYoutubeVideos(exerciseName: string): Observable<IYoutubeVideoSearch> {
    return this.httpClient.get<IYoutubeVideoSearch>(
      `https://www.googleapis.com/youtube/v3/search` +
        `?q=${exerciseName}` +
        `&maxResults=3` +
        `&part=snippet` +
        `&key=AIzaSyDRPCF992FqiuLEuTvxpUzixe7VuAQuzjI`
    )
  }
}

export interface IWorkoutVideosService {
  searchYoutubeVideos(string): Observable<IYoutubeVideoSearch>
}

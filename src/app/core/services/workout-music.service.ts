import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, ReplaySubject, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { IHearThisSearchResult, IHearThisTrackResult } from '../../interfaces'

@Injectable({
  providedIn: 'root',
})
export class WorkoutMusicService implements IWorkoutMusicService {
  retrieveTrack: Observable<IHearThisSearchResult>
  trackSubject: ReplaySubject<IHearThisSearchResult>
  trackRequest: Observable<IHearThisSearchResult>
  baseUrl = environment.musicApi

  constructor(private httpClient: HttpClient) {
    this.trackSubject = new ReplaySubject(1)
  }

  static handleError(error: Response) {
    console.error(error)
    return throwError(error || 'Server error')
  }

  searchMusicTracks(searchParam): Observable<IHearThisSearchResult[]> {
    return this.httpClient.get<IHearThisSearchResult[]>(
      this.baseUrl + `search/?t=${searchParam}` + '&page=1&count=5'
    )
  }

  getPopularFeed(): Observable<IHearThisSearchResult> {
    return this.httpClient.get<IHearThisSearchResult>(
      this.baseUrl + 'feed/?page=1&count=1'
    )
  }

  getSingleTrack(trackId, refresh = false) {
    if (refresh || !this.trackRequest) {
      this.trackRequest = this.httpClient
        .get<IHearThisTrackResult>(this.baseUrl + trackId + '/')
        .pipe(catchError(WorkoutMusicService.handleError))
      this.trackRequest.subscribe(
        result => {
          this.trackSubject.next(result)
        },
        error => this.trackSubject.error(error)
      )
    }
    return this.trackSubject.asObservable()
  }
}

export interface IWorkoutMusicService {
  searchMusicTracks(string): Observable<IHearThisSearchResult[]>
}

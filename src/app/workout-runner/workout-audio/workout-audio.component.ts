import { Component, Input, OnInit, Output, ViewChild } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { WorkoutMusicService } from 'src/app/core/services/workout-music.service'
import { IHearThisTrack, IHearThisTrackResult } from 'src/app/interfaces'
import { ExerciseChangedEvent } from '../../core/model'
import { MyAudioDirective } from '../../shared/my-audio.directive'

@Component({
  selector: 'app-workout-audio',
  templateUrl: './workout-audio.component.html',
  styles: [],
})
export class WorkoutAudioComponent implements OnInit {
  @ViewChild('music')
  private music: MyAudioDirective

  @Input()
  public trackId: string
  public trackUrl: SafeResourceUrl
  @Output()
  musicData: IHearThisTrack = {
    permalink: 'None',
    description: 'None',
    genre: 'None',
    title: 'None',
    permalink_url: 'None',
    artwork_url: 'None',
    user: {
      username: 'None',
      permalink_url: 'None',
      avatar_url: 'None',
    },
    stream_url: 'None',
    preview_url: 'None',
  }

  constructor(
    private musicService: WorkoutMusicService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  retrieveTrack(trackId, refresh = false) {
    if (trackId) {
      this.musicService
        .getSingleTrack(trackId, refresh)
        .subscribe((data: IHearThisTrackResult) => {
          this.musicData = this.mapTrackData(data)
          this.trackUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.musicData.preview_url
          )
        })
      return this.musicData
    }
  }

  mapTrackData(data: IHearThisTrackResult): IHearThisTrack {
    const trackData: IHearThisTrack = {
      permalink: 'None',
      description: 'None',
      genre: 'None',
      title: 'None',
      permalink_url: 'None',
      artwork_url: 'None',
      user: {
        username: 'None',
        permalink_url: 'None',
        avatar_url: 'None',
      },
      stream_url: 'None',
      preview_url: 'None',
    }
    if (data) {
      trackData.permalink = data.permalink ? data.permalink : 'None'
      trackData.description = data.description ? data.description : 'None'
      trackData.genre = data.genre ? data.genre : 'None'
      trackData.title = data.title ? data.title : 'None'
      trackData.permalink_url = data.permalink_url ? data.permalink_url : 'None'
      trackData.artwork_url = data.artwork_url ? data.artwork_url : 'None'
      trackData.user.username = data.user.username ? data.user.username : 'None'
      trackData.user.permalink_url = data.user.permalink_url
        ? data.user.permalink_url
        : 'None'
      trackData.user.avatar_url = data.user.avatar_url ? data.user.avatar_url : 'None'
      trackData.stream_url = data.stream_url ? data.stream_url : 'None'
      trackData.preview_url = data.preview_url ? data.preview_url : 'None'
    }
    return trackData
  }

  stop() {
    this.music.stop()
  }

  resume(wait = false) {
    if (wait) {
      const playInterval = window.setInterval(() => {
        this.music.start()
        clearInterval(playInterval)
      }, 1000)
    } else {
      this.music.start()
    }
  }

  toggleMute(e) {
    this.music.toggleMute(e)
  }

  onExerciseChanged(state: ExerciseChangedEvent) {
    if (state.current.name === 'rest') {
      this.music.reduceVolume()
    } else {
      this.music.increaseVolume()
    }
  }
}

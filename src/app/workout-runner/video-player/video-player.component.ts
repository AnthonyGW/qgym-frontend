import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { WorkoutVideosService } from '../../core/services/workout-videos.service'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styles: [],
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  @Input()
  exerciseName: string
  @Output()
  openVideoDialog: EventEmitter<any> = new EventEmitter<any>()
  @Output()
  closeVideoDialog: EventEmitter<any> = new EventEmitter<any>()
  videoList: Array<any>
  constructor(private videoService: WorkoutVideosService) {}

  openVideo() {
    this.openVideoDialog.emit(null)
  }
  closeVideo() {
    this.closeVideoDialog.emit(null)
  }
  ngOnInit() {
    this.loadVideos()
  }
  ngOnChanges() {
    this.loadVideos()
  }
  loadVideos() {
    this.videoService.searchYoutubeVideos(this.exerciseName).subscribe(data => {
      this.videoList = data.items
    })
  }
}

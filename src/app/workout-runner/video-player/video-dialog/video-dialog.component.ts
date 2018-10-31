import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { IVideoSearchResult } from '../../../interfaces'

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styles: [],
})
export class VideoDialogComponent implements OnInit {
  @Input()
  video: IVideoSearchResult
  @Output()
  closeVideoDialog: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild('videoPlayer')
  videoPlayerElement: ElementRef
  safeVideoURL: SafeResourceUrl
  private youtubeUrlPrefix = '//www.youtube.com/embed/'
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youtubeUrlPrefix +
        this.video.id.videoId +
        '?enablejsapi=1&version=3&playerapiid=ytplayer'
    )
  }

  closeVideo() {
    this.videoPlayerElement.nativeElement.contentWindow.postMessage(
      '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
      '*'
    )
    this.closeVideoDialog.emit(null)
  }

  returnEvent() {
    return
  }
}

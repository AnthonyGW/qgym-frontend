import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appAudio]',
  exportAs: 'MyAudio',
})
export class MyAudioDirective {
  audioPlayer: HTMLAudioElement
  fullVolumeLevel = 0.1
  reducedVolumeLevel = this.fullVolumeLevel * 0.2
  constructor(element: ElementRef) {
    this.audioPlayer = element.nativeElement
    this.audioPlayer.volume = this.fullVolumeLevel
  }

  stop() {
    this.audioPlayer.pause()
  }

  start() {
    this.audioPlayer.play()
  }

  toggleMute(e) {
    if (e) {
      this.audioPlayer.volume = 0
    } else {
      this.audioPlayer.volume = this.fullVolumeLevel
    }
  }

  reduceVolume() {
    this.audioPlayer.volume = this.reducedVolumeLevel
  }

  increaseVolume() {
    this.audioPlayer.volume = this.fullVolumeLevel
  }
}

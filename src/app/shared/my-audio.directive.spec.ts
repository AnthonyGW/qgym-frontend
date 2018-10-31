import { ElementRef } from '@angular/core'
import { MyAudioDirective } from './my-audio.directive'

describe('MyAudioDirective', () => {
  it('should create an instance', () => {
    const mockAudioPlayer = new ElementRef(document.createElement('audio'))
    const directive = new MyAudioDirective(mockAudioPlayer)
    expect(directive).toBeTruthy()
    expect(directive.audioPlayer).toEqual(mockAudioPlayer.nativeElement)
  })
})

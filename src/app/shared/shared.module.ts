import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MyAudioDirective } from './my-audio.directive'
import { ConcatlistPipe } from './pipes/concatlist.pipe'
import { OrderByPipe } from './pipes/order-by.pipe'
import { SearchPipe } from './pipes/search.pipe'
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe'

@NgModule({
  imports: [CommonModule],
  exports: [OrderByPipe, SearchPipe, MyAudioDirective, SecondsToTimePipe, ConcatlistPipe],
  declarations: [
    OrderByPipe,
    SearchPipe,
    MyAudioDirective,
    SecondsToTimePipe,
    ConcatlistPipe,
  ],
})
export class SharedModule {}

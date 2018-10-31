import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ErrorsComponent } from './errors/errors.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, ErrorsComponent],
  declarations: [HeaderComponent, ErrorsComponent],
  providers: [],
})
export class CoreModule {}

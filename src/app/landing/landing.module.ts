import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AuthenticateComponent } from './authenticate/authenticate.component'
import { HomeComponent } from './home/home.component'
import { LandingComponent } from './landing.component'
import { LandingResolver } from './landing.resolver'
import { LandingRoutingModule } from './landing.routing.module'

@NgModule({
  imports: [CommonModule, FormsModule, LandingRoutingModule],
  declarations: [LandingComponent, HomeComponent, AuthenticateComponent],
  providers: [LandingResolver],
})
export class LandingModule {}

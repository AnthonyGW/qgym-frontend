import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { LandingModule } from './landing/landing.module'
import { SharedModule } from './shared/shared.module'
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WorkoutRunnerModule,
    AppRoutingModule,
    LandingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

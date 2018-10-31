import { async, TestBed } from '@angular/core/testing'
import { BrowserModule, By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { LandingModule } from './landing/landing.module'
import { SharedModule } from './shared/shared.module'
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        WorkoutRunnerModule,
        LandingModule,
        CoreModule,
        SharedModule,
        RouterTestingModule,
      ],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    const headerDebugElement = fixture.debugElement.query(By.css('app-header'))
    headerDebugElement.componentInstance.isSignedIn = false

    expect(app).toBeTruthy()
  })
})

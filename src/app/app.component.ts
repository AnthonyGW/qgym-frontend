import { Component } from '@angular/core'
import { AuthenticationService } from './core/services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {
    document.cookie.split(' ').forEach(val => {
      if (val.startsWith('connect.sid=')) {
        this.authService.isSignedIn = true
        this.authService.hasError = false
        this.authService.error = null
      }
    })
  }
}

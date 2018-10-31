import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  isSignedIn() {
    if (localStorage.getItem('isSignedIn') === 'true') {
      return true
    } else {
      return false
    }
  }
}

import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styles: [],
})
export class ErrorsComponent implements OnInit {
  isSignedIn: boolean
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
    if (localStorage.getItem('isSignedIn') === 'true') {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }
}

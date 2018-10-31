import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input()
  isSignedIn: boolean
  constructor(private router: Router, public authService: AuthenticationService) {}

  ngOnInit() {}

  ngOnChanges() {}

  signOut() {
    this.authService.signoutUser().subscribe(data => {
      this.router.navigate(['/'])
    })
  }
}

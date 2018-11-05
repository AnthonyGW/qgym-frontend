import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styles: [],
})
export class ErrorsComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}
}

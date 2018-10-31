import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from 'src/app/core/services/authentication.service'

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styles: [],
})
export class AuthenticateComponent implements OnInit {
  type: string
  title: string
  submitted = false
  email: string
  password: string
  confirmPassword: string
  error: string
  @Output()
  signedIn: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    public route: ActivatedRoute,
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { type: string }) => {
      this.type = data.type
      if (this.type === 'signup') {
        this.title = 'Create an Account'
      } else if (this.type === 'signin') {
        this.title = 'Welcome Back'
      }
    })
  }

  submitSignin(signinForm: NgForm) {
    this.submitted = true
    const userData = {
      email: this.email,
      password: this.password,
    }
    if (!signinForm.valid) {
      return
    } else {
      this.authService.signinUser(userData).subscribe(data => {
        if (data['message'] && data['message'].startsWith('Authorization successful.')) {
          this.email = ''
          this.password = ''
          this.submitted = false
          this.router.navigate(['dashboard'])
        }
      }, this.handleError)
    }
  }

  submitSignup(signupForm: NgForm) {
    const userData = {
      email: this.email,
      password: this.password,
    }
    if (!signupForm.valid) {
      return
    } else {
      this.authService.signupUser(userData).subscribe(data => {
        if (data['email'] === this.email) {
          this.router.navigate(['signin'])
        }
      })
    }
  }

  handleError(error) {
    if (error.status === 404) {
      this.error = 'User account not found'
    }
  }
}

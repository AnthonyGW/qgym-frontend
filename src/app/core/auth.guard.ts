import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { AuthenticationService } from './services/authentication.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkSignin(state.url)
  }

  checkSignin(url: string): boolean {
    if (this.authService.isSignedIn && !this.authService.hasError) {
      return true
    } else if (!this.authService.isSignedIn && !this.authService.error) {
      this.authService.hasError = false
      this.authService.isSignedIn = true
      return true
    } else {
      this.router.navigate(['/home/signin'])
      return false
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthWorkoutGuard implements CanActivateChild {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkError(state.url)
  }

  checkError(url: string): boolean {
    if (!this.authService.hasError) {
      return true
    } else if (this.authService.hasError) {
      this.router.navigate(['/error'])
      return false
    } else {
      this.router.navigate(['/home/signin'])
      return false
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthLandingGuard implements CanActivateChild {
  hasCookie = false
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isSignedIn && !this.authService.hasError) {
      this.router.navigate(['/dashboard'])
    }
    return true
  }
}

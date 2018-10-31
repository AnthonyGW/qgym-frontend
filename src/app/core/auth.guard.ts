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
    if (localStorage.getItem('isSignedIn') === 'true') {
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

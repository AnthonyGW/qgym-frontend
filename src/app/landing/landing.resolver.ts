import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

@Injectable()
export class LandingResolver implements Resolve<string> {
  constructor(public router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    if (state.url === '/home/signin') {
      return 'signin'
    } else if (state.url === '/home/signup') {
      return 'signup'
    } else {
      this.router.navigate(['/error'])
      return ''
    }
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public static hasError = false
  public static error: Response
  apiUrl = 'http://localhost:3040/api/v1/users/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  }
  constructor(private httpClient: HttpClient) {
    if (!localStorage.getItem('isSignedIn')) {
      localStorage.setItem('isSignedIn', 'false')
    }
  }

  static handleError(error: Response) {
    console.error(error)
    this.hasError = true
    this.error = error
    return throwError(error || 'Server error')
  }

  get error() {
    return AuthenticationService.error
  }

  set error(err) {
    AuthenticationService.error = err
  }

  get hasError() {
    return AuthenticationService.hasError
  }

  set hasError(err) {
    AuthenticationService.hasError = err
  }

  signinUser(userCredentials: any) {
    return this.httpClient
      .post(this.apiUrl + 'signin', userCredentials, this.httpOptions)
      .pipe(catchError(AuthenticationService.handleError))
      .pipe(data => {
        this.hasError = false
        localStorage.setItem('isSignedIn', 'true')
        return data
      })
  }

  signupUser(userCredentials: any) {
    return this.httpClient
      .post(this.apiUrl + 'signup', userCredentials, this.httpOptions)
      .pipe(catchError(AuthenticationService.handleError))
      .pipe(data => {
        this.hasError = false
        return data
      })
  }

  signoutUser() {
    return this.httpClient
      .get(this.apiUrl + 'signout', this.httpOptions)
      .pipe(catchError(AuthenticationService.handleError))
      .pipe(data => {
        localStorage.setItem('isSignedIn', 'false')
        return data
      })
  }
}

export interface IAuthenticationService {
  signupUser(userCredentials: any): Observable<any>
  signinUser(userCredentials: any): Observable<any>
  signoutUser(userCredentials: any): Observable<any>
}

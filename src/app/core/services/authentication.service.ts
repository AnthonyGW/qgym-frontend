import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public static hasError = false
  public static error: Response
  public static isSignedIn = false
  apiUrl = environment.authUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  }
  constructor(private httpClient: HttpClient) {}

  static handleError(error: Response) {
    console.error(error)
    AuthenticationService.hasError = true
    AuthenticationService.error = error
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

  get isSignedIn() {
    return AuthenticationService.isSignedIn
  }

  set isSignedIn(val) {
    AuthenticationService.isSignedIn = val
  }

  signinUser(userCredentials: any) {
    return this.httpClient
      .post(this.apiUrl + 'signin', userCredentials, this.httpOptions)
      .pipe(catchError(AuthenticationService.handleError))
      .pipe(data => {
        this.hasError = false
        document.cookie.split(' ').forEach(val => {
          if (val.startsWith('connect.sid=')) {
            AuthenticationService.isSignedIn = true
          }
        })
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
        this.isSignedIn = false
        return data
      })
  }
}

export interface IAuthenticationService {
  signupUser(userCredentials: any): Observable<any>
  signinUser(userCredentials: any): Observable<any>
  signoutUser(userCredentials: any): Observable<any>
}

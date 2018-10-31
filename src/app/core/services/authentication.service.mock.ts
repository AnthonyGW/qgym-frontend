import { of } from 'rxjs'

export class AuthenticationServiceMock {
  public static hasError = false
  public static error: Response
  private mockUser = { email: 'mock@email.com', password: 'mock@password.com' }

  constructor() {
    if (!localStorage.getItem('isSignedIn')) {
      localStorage.setItem('isSignedIn', 'false')
    }
  }

  static handleError(error) {
    this.hasError = true
    this.error = error
    console.log(error || 'Server error')
  }

  get error() {
    return AuthenticationServiceMock.error
  }

  set error(err) {
    AuthenticationServiceMock.error = err
  }

  get hasError() {
    return AuthenticationServiceMock.hasError
  }

  set hasError(err) {
    AuthenticationServiceMock.hasError = err
  }

  signupUser(userCredentials) {
    if (userCredentials) {
      localStorage.setItem('isSignedIn', 'true')
      return of({ id: 'mockId', email: userCredentials.email })
    }
  }

  signinUser(userCredentials) {
    if (
      userCredentials.email === this.mockUser.email &&
      userCredentials.password === this.mockUser.password
    ) {
      return of({
        message:
          'Authorization successful. ' + 'Check session ID named connect.sid in cookies.',
      })
    } else {
      const error = {
        statusText: 'Authorization failed.',
        status: 401,
      }
      return AuthenticationServiceMock.handleError(error)
    }
  }

  signoutUser() {
    localStorage.setItem('isSignedIn', 'false')
    return { subscribe: callback => callback({ message: 'Signed out successfully.' }) }
  }
}

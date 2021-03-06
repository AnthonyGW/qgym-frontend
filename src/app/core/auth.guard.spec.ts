import { HttpClient, HttpHandler } from '@angular/common/http'
import { inject, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AuthGuard } from './auth.guard'

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        HttpClient,
        HttpHandler,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          },
        },
      ],
    })
  })

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy()
  }))
})

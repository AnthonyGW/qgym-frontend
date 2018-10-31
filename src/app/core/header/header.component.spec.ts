import { Directive, NO_ERRORS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'
import { AuthenticationServiceMock } from '../services/authentication.service.mock'
import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  const fakeActivatedRoute = {
    snapshot: {
      data: {},
    },
  } as ActivatedRoute

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MockRouterLinkDirective],
      imports: [],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          },
        },
        {
          provide: AuthenticationService,
          useClass: AuthenticationServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    component.isSignedIn = false
    fixture.detectChanges()
  })

  it('should create', () => {
    // spyOn(mockAuthService, 'signoutUser').and.returnValue(of({}))
    // spyOn(mockAuthService, 'signoutUser').and.returnValue({ subscribe: () => ({}) })
    expect(component).toBeTruthy()
  })
})

@Directive({
  // tslint:disable-next-line
  selector: '[routerLink], [routerLinkActive]',
})
class MockRouterLinkDirective {}

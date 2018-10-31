import { HttpClient, HttpHandler } from '@angular/common/http'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { of } from 'rxjs'
import { AuthenticateComponent } from './authenticate.component'

describe('AuthenticateComponent', () => {
  let component: AuthenticateComponent
  let fixture: ComponentFixture<AuthenticateComponent>
  const fakeActivatedRoute = { snapshot: { data: {} }, data: of({}) } as ActivatedRoute

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticateComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        HttpClient,
        HttpHandler,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          },
        },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

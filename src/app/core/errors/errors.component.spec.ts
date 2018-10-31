import { HttpClient, HttpHandler } from '@angular/common/http'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ErrorsComponent } from './errors.component'

describe('ErrorsComponent', () => {
  let component: ErrorsComponent
  let fixture: ComponentFixture<ErrorsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

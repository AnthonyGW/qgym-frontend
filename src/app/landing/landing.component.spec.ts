import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ChildrenOutletContexts } from '@angular/router'
import { LandingComponent } from './landing.component'
import { LandingModule } from './landing.module'
import { LandingRoutingModule } from './landing.routing.module'

describe('LandingComponent', () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [LandingRoutingModule, LandingModule],
      providers: [ChildrenOutletContexts],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

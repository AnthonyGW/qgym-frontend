import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  type: string

  constructor(public router: Router) {}

  ngOnInit() {}

  onSelect() {
    this.router.navigate([
      './workout',
      '8 Minute Workout'.toLowerCase().replace(' ', '-'),
    ])
  }
}

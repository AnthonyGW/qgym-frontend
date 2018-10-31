import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthenticateComponent } from './authenticate/authenticate.component'
import { HomeComponent } from './home/home.component'
import { LandingComponent } from './landing.component'
import { LandingResolver } from './landing.resolver'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      {
        path: ':type',
        component: AuthenticateComponent,
        resolve: { type: LandingResolver },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}

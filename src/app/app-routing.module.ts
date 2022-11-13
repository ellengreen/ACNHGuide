import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritterpediaContainerComponent } from './containers/critterpedia-container/critterpedia-container.component';
import { EventsContainerComponent } from './containers/events-container/events-container.component';
import { MuseumContainerComponent } from './containers/museum-container/museum-container.component';
import { ResidentServicesContainerComponent } from './containers/resident-services-container/resident-services-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PassportComponent } from './outdated/passport/passport.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeContainerComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'critterpedia', component: CritterpediaContainerComponent },
  { path: 'villagers', component: ResidentServicesContainerComponent},
  { path: 'passport', component: PassportComponent},
  { path: 'events', component: EventsContainerComponent},
  { path: 'museum', component: MuseumContainerComponent}
  // {
  //   path: '**',
  //   redirectTo: '/welcome',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

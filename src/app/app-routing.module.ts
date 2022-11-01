import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PassportComponent } from './passport/passport.component';
import { MuseumComponent } from './museum/museum.component';
import { ResidentServicesContainerComponent } from './containers/resident-services-container/resident-services-container.component';
import { CritterpediaContainerComponent } from './containers/critterpedia-container/critterpedia-container.component';
import { EventsContainerComponent } from './containers/events-container/events-container.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'critterpedia', component: CritterpediaContainerComponent },
  { path: 'villagers', component: ResidentServicesContainerComponent},
  { path: 'passport', component: PassportComponent},
  { path: 'events', component: EventsContainerComponent},
  { path: 'museum', component: MuseumComponent}
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

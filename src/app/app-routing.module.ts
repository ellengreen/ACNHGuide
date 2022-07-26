import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { VillagersComponent } from './villagers/villagers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PassportComponent } from './passport/passport.component';
import { MuseumComponent } from './museum/museum.component';
import { EventsComponent } from './dashboard/events/events.component';
import { ResidentServicesContainerComponent } from './containers/resident-services-container/resident-services-container.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'critterpedia', component: CritterpediaMainComponent },
  { path: 'villagers', component: ResidentServicesContainerComponent},
  { path: 'passport', component: PassportComponent},
  { path: 'events', component: EventsComponent},
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

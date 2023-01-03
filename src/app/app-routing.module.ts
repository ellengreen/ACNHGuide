import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritterpediaContainerComponent } from './containers/critterpedia-container/critterpedia-container.component';
import { EventsContainerComponent } from './containers/events-container/events-container.component';
import { MuseumContainerComponent } from './containers/museum-container/museum-container.component';
import { ResidentServicesContainerComponent } from './containers/resident-services-container/resident-services-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PassportContainerComponent } from './containers/passport-container/passport-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'critterpedia', component: CritterpediaContainerComponent },
  { path: 'villagers', component: ResidentServicesContainerComponent},
  { path: 'passport', component: PassportContainerComponent},
  { path: 'events', component: EventsContainerComponent},
  { path: 'museum', component: MuseumContainerComponent},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

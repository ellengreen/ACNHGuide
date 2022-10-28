import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { AuthenticationService } from './shared/authentication.service';
import { CurrentCrittersComponent } from './dashboard/current-critters/current-critters.component';
import { CurrentFishComponent } from './dashboard/current-critters/current-fish/current-fish.component';
import { CurrentBugsComponent } from './dashboard/current-critters/current-bugs/current-bugs.component';
import { EventsComponent } from './dashboard/events/events.component';
import { BirthdayComponent } from './dashboard/birthday/birthday.component';
import { ProfileComponent } from './profile/profile.component';
import { VillagersComponent } from './villagers/villagers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NookPhoneComponent } from './nook-phone/nook-phone.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { CritterpediaTableComponent } from './components/critterpedia/critterpedia-table.component';
import { PassportComponent } from './passport/passport.component';
import { MuseumComponent } from './museum/museum.component';
import { CritterInfoDialogComponent } from './components/critter-info-dialog/critter-info-dialog.component';
import { ResidentServicesContainerComponent } from './containers/resident-services-container/resident-services-container.component';
import { ResidentServicesComponent } from './components/resident-services/resident-services.component';
import { VillagerInfoDialogComponent } from './components/villager-info-dialog/villager-info-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CritterpediaContainerComponent } from './containers/critterpedia-container/critterpedia-container.component';
import { VillagersFilterComponent } from './components/villagers-filter/villagers-filter.component';
import { CritterpediaSearchComponent } from './components/critterpedia-search/critterpedia-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CurrentCrittersComponent,
    CurrentFishComponent,
    CurrentBugsComponent,
    EventsComponent,
    BirthdayComponent,
    CritterpediaContainerComponent,
    VillagersComponent,
    WelcomeComponent,
    NookPhoneComponent,
    CritterpediaTableComponent,
    PassportComponent,
    MuseumComponent,
    CritterInfoDialogComponent,
    ResidentServicesContainerComponent,
    ResidentServicesComponent,
    VillagerInfoDialogComponent,
    VillagersFilterComponent,
    CritterpediaSearchComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    NgbTypeaheadModule
  ],
  providers: [AuthenticationService, DatePipe, KeyValuePipe, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

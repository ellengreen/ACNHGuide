import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';
import { FishComponent } from './critterpedia/fish/fish.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { CurrentCrittersComponent } from './dashboard/current-critters/current-critters.component';
import { CurrentBugsComponent } from './dashboard/currentCritters/current-bugs/current-bugs.component';
import { CurrentFishComponent } from './dashboard/currentCritters/current-fish/current-fish.component';
import { AuthenticationService } from './shared/authentication.service';
import { DatePipe, KeyValuePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    DashboardComponent,
    BugsComponent,
    FishComponent,
    CritterpediaMainComponent,
    CurrentCrittersComponent,
    CurrentBugsComponent,
    CurrentFishComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, DatePipe, KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

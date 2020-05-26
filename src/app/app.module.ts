import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BugsComponent } from './critterpedia/bugs/bugs.component';
import { FishComponent } from './critterpedia/fish/fish.component';
import { CritterpediaMainComponent } from './critterpedia/critterpedia-main/critterpedia-main.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { VerifyEmailComponent } from './user-auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './user-auth/forgot-password/forgot-password.component';
import { AuthComponent } from './user-auth/auth/auth.component';
import { AuthenticationService } from './shared/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    DashboardComponent,
    BugsComponent,
    FishComponent,
    CritterpediaMainComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    AuthComponent
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
    RouterModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

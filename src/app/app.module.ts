import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from 'environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './archive/profile/profile.component';
import { VillagersComponent } from './archive/villagers/villagers.component';
import { NookPhoneComponent } from './nook-phone/nook-phone.component';
import { CritterpediaTableComponent } from './components/critterpedia/critterpedia-table.component';
import { MuseumComponent } from './v2-components/museum/museum.component';
import { CritterInfoDialogComponent } from './components/critter-info-dialog/critter-info-dialog.component';
import { ResidentServicesContainerComponent } from './v2-containers/resident-services-container/resident-services-container.component';
import { ResidentServicesComponent } from './v2-components/resident-services/resident-services.component';
import { VillagerInfoDialogComponent } from './v2-components/villager-info-dialog/villager-info-dialog.component';
import { CritterpediaContainerComponent } from './containers/critterpedia-container/critterpedia-container.component';
import { VillagersFilterComponent } from './v2-components/villagers-filter/villagers-filter.component';
import { CritterpediaSearchComponent } from './components/critterpedia-search/critterpedia-search.component';
import { EventsContainerComponent } from './v2-containers/events-container/events-container.component';
import { EventCardComponent } from './v2-components/event-card/event-card.component';
import { MuseumContainerComponent } from './v2-containers/museum-container/museum-container.component';
import { MuseumTableComponent } from './v2-components/museum-table/museum-table.component';
import { ArtDialogComponent } from './v2-components/art-dialog/art-dialog.component';
import { MuseumDialogComponent } from './v2-components/museum-dialog/museum-dialog.component';
import { EventFilterComponent } from './v2-components/event-filter/event-filter.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PassportContainerComponent } from './v2-containers/passport-container/passport-container.component';
import { PassportImageComponent } from './v2-components/passport-image/passport-image.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';

import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CritterpediaContainerComponent,
    VillagersComponent,
    NavigationButtonComponent,
    NookPhoneComponent,
    CritterpediaTableComponent,
    MuseumComponent,
    CritterInfoDialogComponent,
    ResidentServicesContainerComponent,
    ResidentServicesComponent,
    VillagerInfoDialogComponent,
    VillagersFilterComponent,
    CritterpediaSearchComponent,
    EventsContainerComponent,
    EventCardComponent,
    MuseumContainerComponent,
    MuseumTableComponent,
    ArtDialogComponent,
    MuseumDialogComponent,
    EventFilterComponent,
    HomeContainerComponent,
    PassportContainerComponent,
    PassportImageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    NgbTypeaheadModule,
    MatButtonToggleModule,
    MatTooltipModule,
    CarouselModule,
    MatIconModule,
    MatTableModule
    // MAKE MATERIAL MODULE 
  ],
  providers: [AuthenticationService, DatePipe, KeyValuePipe, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

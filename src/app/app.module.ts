import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { VerNavbarComponent } from './components/ver-navbar/ver-navbar.component';
import { HorNavbarComponent } from './components/hor-navbar/hor-navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { CostumersComponent } from './components/costumers/costumers.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCostumerComponent } from './components/edit-costumer/edit-costumer.component';
import { RegisterComponent } from './components/register/register.component';
import { AddCostumerComponent } from './components/add-costumer/add-costumer.component';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactFilterPipe } from './pipes/contact-filter.pipe';
import { PhoneFilterPipe } from './pipes/phone-filter.pipe';
import { HomeCostumersComponent } from './components/home-costumers/home-costumers.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeContactsComponent } from './components/home-contacts/home-contacts.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    VerNavbarComponent,
    HorNavbarComponent,
    ContactsComponent,
    LoginComponent,
    CostumersComponent,
    PnfComponent,
    EditCostumerComponent,
    RegisterComponent,
    AddCostumerComponent,
    CostumerDetailsComponent,
    FilterPipe,
    ContactFilterPipe,
    PhoneFilterPipe,
    HomeCostumersComponent,
    HomeContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

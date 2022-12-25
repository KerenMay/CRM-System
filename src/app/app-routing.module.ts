import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { CostumersComponent } from './components/costumers/costumers.component';
import { HomeContactsComponent } from './components/home-contacts/home-contacts.component';
import { HomeCostumersComponent } from './components/home-costumers/home-costumers.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'costumers',
    component: HomeCostumersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: HomeContactsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'costumers/:id', component: CostumerDetailsComponent },
  { path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

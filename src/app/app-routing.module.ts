import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';
import { StatisticspageComponent } from './pages/statisticspage/statisticspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContacteditComponent } from './pages/contactedit/contactedit.component';
import { SignupComponent } from './pages/signup/signup.component';

import {AuthService} from '../app/services/authservice/auth.service';

const routes: Routes = [
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthService] },
    { path: 'contacts/edit', component: ContacteditComponent },
    { path: 'contacts/:id', component: ContactdetailsComponent },
    { path: 'contacts/edit/:id', component: ContacteditComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'statistics', component: StatisticspageComponent, canActivate: [AuthService] },
    { path: 'home', component: HomepageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
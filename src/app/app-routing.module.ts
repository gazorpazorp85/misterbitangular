import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';
import { StatisticspageComponent } from './pages/statisticspage/statisticspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContacteditComponent } from './pages/contactedit/contactedit.component';

const routes: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/edit', component: ContacteditComponent },
    { path: 'contacts/:id', component: ContactdetailsComponent },
    { path: 'contacts/edit/:id', component: ContacteditComponent },
    { path: 'statistics', component: StatisticspageComponent },
    { path: 'main', component: HomepageComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
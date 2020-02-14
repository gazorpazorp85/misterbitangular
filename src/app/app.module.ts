import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';
import { StatisticspageComponent } from './pages/statisticspage/statisticspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContacteditComponent } from './pages/contactedit/contactedit.component';

import { ContactslistComponent } from './cmps/contactslist/contactslist.component';
import { ContactpreviewComponent } from './cmps/contactpreview/contactpreview.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { ContactNavBarComponent } from './cmps/contact-nav-bar/contact-nav-bar.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { FooterComponent } from './cmps/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactslistComponent,
    ContactpreviewComponent,
    ContactsComponent,
    ContactdetailsComponent,
    FilterComponent,
    ContactNavBarComponent,
    ChartComponent,
    StatisticspageComponent,
    HomepageComponent,
    ContacteditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactdetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticspageComponent } from './pages/statistics-page/statistics-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContacteditComponent } from './pages/contact-edit/contact-edit.component';

import { ContactslistComponent } from './cmps/contacts-list/contacts-list.component';
import { ContactpreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { ContactNavBarComponent } from './cmps/contact-nav-bar/contact-nav-bar.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { LoadingscreenComponent } from './cmps/loading-screen/loading-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferfundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveslistComponent } from './cmps/moves-list/moves-list.component';

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
    FooterComponent,
    LoadingscreenComponent,
    SignupComponent,
    TransferfundComponent,
    MoveslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

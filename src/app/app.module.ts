import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { UserService } from './services/user.service'
import { ContactService } from './services/contact.service'
import { BitcoinService } from './services/bitcoin.service'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ChartComponent,
    ContactFilterComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactService, UserService, BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

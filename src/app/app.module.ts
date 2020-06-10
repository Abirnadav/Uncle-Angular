import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

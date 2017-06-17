import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutUsComponent }  from './aboutus/about-us.component';
import { ContactUsComponent }  from './contactus/contact-us.component';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot([
      {path: '', component:AboutUsComponent}, 
      {path: 'contact', component:ContactUsComponent}     
  ])],
  declarations: [ AppComponent, AboutUsComponent, ContactUsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

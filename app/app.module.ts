import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutUsComponent }  from './aboutus/about-us.component';
import { ContactUsComponent }  from './contactus/contact-us.component';
import { EmplListComponent }  from './empl/empl-list.component';
import { NameFilterPipe } from './empl/name-filter.pipe';
import { CompanyFilterPipe } from './empl/company-filter.pipe';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot([
      {path: '', component:AboutUsComponent}, 
      {path: 'empl', component:EmplListComponent}, 
      {path: 'contact', component:ContactUsComponent}     
  ]), FormsModule, HttpModule ],
  declarations: [ AppComponent, AboutUsComponent, ContactUsComponent, EmplListComponent, NameFilterPipe, CompanyFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

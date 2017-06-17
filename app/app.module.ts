import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AboutUsComponent }  from './aboutus/about-us.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AboutUsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

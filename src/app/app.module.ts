import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NameFilterPipe } from './empl/name-filter.pipe';
import { CompanyFilterPipe } from './empl/company-filter.pipe';
import { EmplListComponent }  from './empl/empl-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplListComponent,
    NameFilterPipe,
    CompanyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

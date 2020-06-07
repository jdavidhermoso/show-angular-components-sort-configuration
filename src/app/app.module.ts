import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FiltersModule} from './filters/filters.module';
import { FiltersFormComponent } from './components/filters-form/filters-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FiltersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

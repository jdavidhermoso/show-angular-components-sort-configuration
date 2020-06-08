import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FiltersModule} from './filters';

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

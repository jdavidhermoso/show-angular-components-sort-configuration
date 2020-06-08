import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  FiltersComponent,
  FiltersDifficultComponent,
  FiltersDurationComponent,
  FiltersFormComponent,
  FiltersLanguageComponent,
  FiltersPriceComponent,
  FiltersRatingComponent
} from './components';


@NgModule({
  declarations: [
    FiltersPriceComponent,
    FiltersLanguageComponent,
    FiltersRatingComponent,
    FiltersDurationComponent,
    FiltersDifficultComponent,
    FiltersComponent,
    FiltersFormComponent
  ],
  exports: [
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FiltersModule {
}

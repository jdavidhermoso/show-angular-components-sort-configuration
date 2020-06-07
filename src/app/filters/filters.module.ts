import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersPriceComponent} from './components/filters-price/filters-price.component';
import {FiltersLanguageComponent} from './components/filters-language/filters-language.component';
import {FiltersRatingComponent} from './components/filters-rating/filters-rating.component';
import {FiltersDurationComponent} from './components/filters-duration/filters-duration.component';
import {FiltersDifficultComponent} from './components/filters-difficult/filters-difficult.component';
import {FiltersComponent} from './components/filters/filters.component';
import {FiltersFormComponent} from '../components/filters-form/filters-form.component';
import {ReactiveFormsModule} from '@angular/forms';


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
export class FiltersModule { }

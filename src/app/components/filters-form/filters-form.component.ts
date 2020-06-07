import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OutputEmitter} from '@angular/compiler/src/output/abstract_emitter';
import {FiltersOrderConfiguration} from '../../filters/models/filters-order-configuration';

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.css']
})
export class FiltersFormComponent {
  @Output()
  public filtersUpdate: EventEmitter<FiltersOrderConfiguration> = new EventEmitter<FiltersOrderConfiguration>();

  public priceControl: FormControl = new FormControl(0);
  public difficultControl: FormControl = new FormControl(0);
  public languageControl: FormControl = new FormControl(0);
  public durationControl: FormControl = new FormControl(0);
  public ratingControl: FormControl = new FormControl(0);
  public filtersForm: FormGroup = new FormGroup({
    difficultLevel: this.difficultControl,
    duration: this.durationControl,
    rating: this.ratingControl,
    language: this.languageControl,
    price: this.priceControl
  });

  public filtersFormConfiguration = [
    {
      placeHolder: 'Price filter order',
      control: this.priceControl
    },
    {
      placeHolder: 'Difficult filter order',
      control: this.difficultControl
    },
    {
      placeHolder: 'Rating filter order',
      control: this.ratingControl
    },
    {
      placeHolder: 'Language filter order',
      control: this.languageControl
    },
    {
      placeHolder: 'Duration filter order',
      control: this.durationControl
    }
  ];

  public onFilterChange() {
    this.filtersUpdate.emit(this.filtersForm.value);
  }
}

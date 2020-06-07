import {Injectable} from '@angular/core';
import {FiltersOrderConfiguration} from '../models/filters-order-configuration';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private filtersOrderConfiguration = {
    price: 0,
    language: 0,
    rating: 0,
    duration: 0,
    difficultLevel: 0
  };

  public filtersOrderConfigurationBehaviorSubject = new BehaviorSubject<FiltersOrderConfiguration>(this.filtersOrderConfiguration);

  public updateFilterOrder(filtersOrderConfiguration: FiltersOrderConfiguration): void {
    console.log('*****')
    console.log(filtersOrderConfiguration)
    console.log('*****')
    this.filtersOrderConfigurationBehaviorSubject.next(filtersOrderConfiguration);
  }
}

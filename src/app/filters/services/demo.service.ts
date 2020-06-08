import {Injectable} from '@angular/core';
import {FiltersOrderConfiguration} from '../models';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public static readonly DEFAULT_FILTER_ORDER_CONFIGURATION: number = 0;
  // NOTE: This service is not part of the final solution.
  // It's just for the demo. This tries to simulate the backend side.
  private filtersOrderConfiguration = {
    price: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
    language: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
    rating: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
    duration: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
    difficultLevel: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION
  };

  public filtersOrderConfigurationBehaviorSubject = new BehaviorSubject<FiltersOrderConfiguration>(this.filtersOrderConfiguration);

  public updateFilterOrder(filtersOrderConfiguration: FiltersOrderConfiguration): void {
    this.filtersOrderConfigurationBehaviorSubject.next(filtersOrderConfiguration);
  }
}

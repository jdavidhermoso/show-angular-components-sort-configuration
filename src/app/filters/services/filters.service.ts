import {Injectable} from '@angular/core';
import {DemoService} from './demo.service';
import {FiltersOrderConfiguration} from '../models/filters-order-configuration';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  constructor(private demoService: DemoService) {
  }

  public getFiltersOrderConfiguration(): Observable<FiltersOrderConfiguration> {
    // In the real world this would be a HTTP call.
    return this.demoService.filtersOrderConfigurationBehaviorSubject
      .pipe(map(this.turnFiltersOrderConfigurationIntoNegative));
  }

  private turnFiltersOrderConfigurationIntoNegative(filtersOrderConfiguration: FiltersOrderConfiguration): FiltersOrderConfiguration {
    for (const filterID in filtersOrderConfiguration) {
      if (filtersOrderConfiguration[filterID] > DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION) {
        filtersOrderConfiguration[filterID] = filtersOrderConfiguration[filterID] * -1;
      }
    }

    return filtersOrderConfiguration;
  }
}

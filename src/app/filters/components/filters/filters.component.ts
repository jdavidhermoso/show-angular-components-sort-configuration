import {Component} from '@angular/core';
import {FiltersService} from '../../services/filters.service';
import {FiltersOrderConfiguration} from '../../models/filters-order-configuration';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  public filtersOrderConfiguration$: Observable<FiltersOrderConfiguration>;

  constructor(private filtersService: FiltersService) {
    this.filtersOrderConfiguration$ = this.filtersService.filtersOrderConfigurationBehaviorSubject.asObservable();
  }

  public updateFilterOrder(filters: FiltersOrderConfiguration) {
    this.filtersService.updateFilterOrder(filters);
  }

}

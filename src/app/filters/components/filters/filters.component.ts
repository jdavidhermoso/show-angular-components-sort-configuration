import {Component} from '@angular/core';
import {DemoService} from '../../services/demo.service';
import {FiltersOrderConfiguration} from '../../models/filters-order-configuration';
import {Observable} from 'rxjs';
import {FiltersService} from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  public filtersOrderConfiguration$: Observable<FiltersOrderConfiguration>;

  constructor(private filtersService: FiltersService,
              private demoService: DemoService) {
    this.filtersOrderConfiguration$ = this.filtersService.getFiltersOrderConfiguration();
  }

  public updateFiltersOrder(filters: FiltersOrderConfiguration) {
    this.demoService.updateFilterOrder(filters);
  }

}

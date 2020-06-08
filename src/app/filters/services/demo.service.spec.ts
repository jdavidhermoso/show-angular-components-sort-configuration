import {DemoService} from './demo.service';
import {FiltersOrderConfiguration} from '../models';
import {BehaviorSubject} from 'rxjs';
import {skip} from 'rxjs/operators';

describe('FiltersService', () => {
  let service: DemoService;

  beforeEach(() => {
    service = new DemoService();

  });

  it('Should notify when a new value is emitted', (done) => {
    service.filtersOrderConfigurationBehaviorSubject = new BehaviorSubject<FiltersOrderConfiguration>({
      price: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      difficultLevel: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      language: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      rating: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      duration: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION
    });

    service.filtersOrderConfigurationBehaviorSubject
      .pipe(
        skip(1)
      )
      .subscribe((filtersOrderConfiguration: FiltersOrderConfiguration) => {
        expect(filtersOrderConfiguration).toMatchSnapshot();
        done();
      });

    service.updateFilterOrder({
      price: 1,
      difficultLevel: 0,
      language: 2,
      rating: 1,
      duration: 3
    });
  });
});

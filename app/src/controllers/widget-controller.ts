class WidgetController {

  static $inject = ['filtersService'];

  private filtersService: FiltersService;
  public filterProperties: string[];
  private filters: Filter[];
  
  constructor(filtersService: FiltersService) {

    this.filtersService = filtersService;
    this.filters = this.filtersService.getFilters();
    this.filterProperties = this.filtersService.getFilterProperties();

    this.filtersService.addItem('first filter');
    this.filtersService.addItem('second filter');

  }
 //

  addFilter() {}
  addCondition() {}

}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);
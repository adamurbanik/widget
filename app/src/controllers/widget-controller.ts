class WidgetController {

  static $inject = ['filtersService'];

  private filtersService: FiltersService;

  private filters: Filter[];
  private properties: Property[];

  constructor(filtersService: FiltersService) {
    this.filtersService = filtersService;

    this.filters = this.filtersService.getFilters();
    this.properties = this.filtersService.getProperties();
  }
  
  



}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);
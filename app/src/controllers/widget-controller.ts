class WidgetController {
  
  static $inject = ['filtersService'];
  
  private filtersService: FiltersService
  
  public filterProperties: string[];
  
  constructor(FiltersService: FiltersService) {
    this.filtersService = FiltersService;
    this.filterProperties = this.filtersService.getFilterProperties();
   
  }
  
  addFilter() {}
  addCondition() {}
  
}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);
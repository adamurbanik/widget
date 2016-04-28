class WidgetController {

  static $inject = ['filtersService'];

  // private filtersService: FiltersService;
  // private filters: Filter[];
  // private conditions : Condition[];
  // private selectedCondition: Condition;
  
  constructor() {
    
    // this.filtersService = filtersService;  
    // this.filters = this.filtersService.getFilters();
    // this.conditions = this.filtersService.getFilterConditions();

    // this.filtersService.addItem('first filter');
    // this.filtersService.addItem('second filter');

  }
 

  addFilter() {}
  addCondition() {}

  // chooseCondition(condition: Condition) {}

}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);
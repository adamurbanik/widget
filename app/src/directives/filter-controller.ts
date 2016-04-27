class FilterController {

  static $inject = ['filtersService'];

  private filtersService: FiltersService;

  private filters: Filter[];
  private properties: string[];
  private view: number = 1;
  private currentFilter: Filter;

  constructor(filtersService: FiltersService) {
    this.filtersService = filtersService;
    
    console.log('filter controller', this.filters);
  }
  moveForward() {
    this.view++;
  }
  moveBackward() {
    this.view--;
  }
  addCondition() {
    this.moveForward();
  }
  selectFilter(filter: Filter) {
    this.moveForward();
    this.currentFilter = filter;
  }
  chooseAttribute(property: string) {
    this.moveForward();
    this.filtersService.updateAttribute(this.currentFilter.getName(), property);
  }
  
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
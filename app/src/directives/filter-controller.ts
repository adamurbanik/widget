enum STATE {
  SCREEN1 = 1,
  SCREEN2 = 2,
  SCREEN3 = 3,
  SCREEN4 = 4
}

class FilterController {

  static $inject = ['filtersService'];

  public STATE = STATE;

  private filtersService: FiltersService;

  private filters: Filter[];
  private conditions: any;
  private view: number = 1;
  private selectedFilter: Filter;
  private selectedCondition: any;


  constructor(filtersService: FiltersService) {
    this.filtersService = filtersService;

    this.filters = this.filtersService.getFilters();
    this.conditions = this.filtersService.getConditions();

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
  isState(val) {
    return STATE[this.view] === val;
  }
  addNewFilter() {
    this.moveForward();
    this.selectedFilter = new Filter();
  }
  selectFilter(filter: Filter) {
    this.moveForward();
    this.selectedFilter = filter;
  }
  chooseCondition(condition: any) {
    this.moveForward();
    this.selectedCondition = condition;
  }
  addConditionToFilter(selectedCondition: any, conditionValue: any) {
    this.filters = this.filtersService.addConditionToFilter(selectedCondition, conditionValue, this.selectedFilter);
  }
  saveFilter(filterName) {
    // check if this name exists. Some validation must be added
    this.selectedFilter.filterName = filterName;
    this.filters = this.filtersService.addFilter(this.selectedFilter);
  }
  showMeBloodyFilters() {
    console.log(this.filters);
  }

}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
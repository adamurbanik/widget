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
  private wrongInput: boolean = false;
  private filterCondition: Condition;

  constructor(filtersService: FiltersService) {
    this.filtersService = filtersService;

    this.filters = this.filtersService.getFilters();
    this.conditions = this.filtersService.getConditions();

  }
  moveForward() {
    this.view++;
    this.reset();
  }
  moveBackward() {
    this.view--;
    this.reset();
  }
  addCondition(type: string) {
    this.selectedFilter.state = type;
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
    this.filterCondition = new Condition();
    this.filterCondition.property = condition.name;

    this.selectedCondition = condition;

  }
  setConditionOperator(operator: string) {
    this.filterCondition.operator = operator;

  }
  addConditionToFilter(conditionValue: any) {
    this.filterCondition.value = conditionValue;
    this.filterCondition.dateTime = Date.now();

    this.selectedFilter.addCondition(this.filterCondition);
    this.view = 2;
  }
  saveFilter(filterName: string) {

    let valid = true;
    this.wrongInput = false;

    if (filterName !== undefined) {
      valid = (this.filtersService.checkIfExists(filterName)) ? false : true;
      (valid) ? this.selectedFilter.filterName = filterName : this.wrongInput = true;
    }

    if (valid && this.selectedFilter.hasName()) {
      this.filtersService.saveFilter(this.selectedFilter);
    }
    else {
      this.wrongInput = true;
    }

  }

  reset() {
    this.wrongInput = false;
  }
  deleteCondition(condition: Condition) {
    this.selectedFilter.removeCondition(condition);
  }



  showMeBloodyFilters() {
    console.log(this.filters);
  }

}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
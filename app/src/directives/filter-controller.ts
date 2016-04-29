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
    selectedCondition.value = conditionValue;
    selectedCondition.dateTime = Date.now();
    this.selectedFilter.addCondition(selectedCondition); 
    this.view = 2;
  }
  saveFilter(filterName: string) {
    let validationFailed = (this.selectedFilter.hasName()) ? true: false;
    
    
    
    if(!this.filtersService.checkIfExists(filterName)) {
      this.filtersService.saveFilter(filterName, this.selectedFilter);
      this.wrongInput = false;
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
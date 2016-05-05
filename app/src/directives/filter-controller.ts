enum STATE {
  FILTERLIST = 1,
  FILTERDETAILED = 2,
  CONDITIONSELECTION = 3,
  CONDITIONCONFIGURATION = 4
}

class FilterController {

  static $inject = ['filtersService'];

  public STATE = STATE;

  private filtersService: FiltersService;

  private filters: Filter[];
  private properties: Property[];
  public view: number = 1;
  private selectedFilter: Filter;
  private selectedProperty: Property;
  private wrongInput: boolean = true;
  private filterCondition: Condition;

  constructor(filtersService: FiltersService) {
    this.filtersService = filtersService;

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
    console.log(this.view);    
    return STATE[this.view] === val;
  }
  addNewFilter() {
    this.moveForward();
    this.selectedFilter = new Filter();    
    console.log(this.selectedFilter);
  }
  selectFilter(filter: Filter) {
    this.moveForward();
    this.selectedFilter = filter;
  }
  chooseCondition(property: Property) {
    this.moveForward();
    this.filterCondition = new Condition();
    this.filterCondition.property = property.name;

    this.selectedProperty = property;
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

    // let valid = true;
    // this.wrongInput = false;

    // if (filterName !== undefined) {
    //   valid = (this.filtersService.checkIfExists(filterName, this.filters)) ? false : true;
    //   (valid) ? this.selectedFilter.filterName = filterName : this.wrongInput = true;
    // }

    // if (valid && this.selectedFilter.hasName()) {
    //   this.filtersService.saveFilter(this.selectedFilter);
    // }
    // else {
    //   this.wrongInput = true;
    // }

  }

  reset() {
    this.wrongInput = false;
  }
  // deleteCondition(condition: Condition) {
  //   this.selectedFilter.removeCondition(condition);
  // }



  showMeBloodyFilters() {
    console.log(this.filters);
  }

}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
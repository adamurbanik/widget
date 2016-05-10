enum STATE {
  FILTERLIST = 1,
  FILTERDETAILED = 2,
  CONDITIONSELECTION = 3,
  CONDITIONCONFIGURATION = 4
}

class FilterController {

  static $inject = ['filtersService'];

  public STATE = STATE;

  public filtersService: FiltersService;

  public filters: Filter[];
  public properties: Property[];
  public view: number = 1;
  public selectedFilter: Filter;
  public selectedProperty: Property = new Property();
  public wrongInput: boolean = true;
  public filterCondition: Condition;

  public onApply: Function;

  constructor(filtersService: FiltersService) {
    this.filtersService = filtersService;
    this.filtersService.setFilters(this.filters);
    
  }

  moveForward() {
    this.view++;
    this.reset();
  }
  moveBackward() {
    this.view--;
    this.reset();
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
    let valid = true;
    this.wrongInput = false;

    if (filterName !== undefined) {
      valid = !this.filtersService.checkIfExists(filterName);

      if (valid) {
        this.selectedFilter.filterName = filterName;
      }
      else {
        this.wrongInput = true;
      }

    }

    if (valid && this.selectedFilter.filterName !== "") {
      this.filters = this.filtersService.saveFilter(this.selectedFilter);
      this.onApply({ filters: this.filters });
    }
    else {
      this.wrongInput = true;
    }
  }
  reset() {
    this.wrongInput = false;
  }



  showMeBloodyFilters() {
    console.log(this.filters);
  }

}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);

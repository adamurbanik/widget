class FilterController {

  private filters: Filter[];
  private properties: string[];
  private view: number = 1;
  private currentFilter: Filter;

  constructor() {
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
  chooseAttribut() {
    this.moveForward();
  }
  
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
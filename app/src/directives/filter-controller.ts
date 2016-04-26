class FilterController {
  
  private filters: Filter[];
  private properties: string[];
  
  constructor() {
    console.log('filter controller', this.filters);
  }
   
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
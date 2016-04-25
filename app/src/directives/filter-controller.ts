class FilterController {
  
  private widgetFilters: Filter[];
  private test: string;
  constructor() {
    
    console.log('filter', this.widgetFilters);
    
  }
   
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
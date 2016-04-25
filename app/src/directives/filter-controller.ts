class FilterController {
  
  private filters: Filter[];
  private test: string;
  constructor() {
    
    console.log(this.test);
    
  }
   
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
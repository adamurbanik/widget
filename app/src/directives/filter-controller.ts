class FilterController {
  
  private filters: Filter[];
  private properties: string[];
  
  constructor() {
    console.log(this.properties);  
    
  }
   
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
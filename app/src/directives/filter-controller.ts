class FilterController {
  
  private mojekapcie: Filter[];
  private test: string;
  constructor() {
    
    console.log('filter', this.mojekapcie);
    
  }
   
}

angular
  .module('widgetApp')
  .controller('FilterController', FilterController);
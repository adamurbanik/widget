class WidgetController {
  
  public filters: Filter[] = [];
  public test: string;
  
  constructor() {
    this.filters.push(new Filter('my default filter'));
    this.test = "my test";
  }
  
  
}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);
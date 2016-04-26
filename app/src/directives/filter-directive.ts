function FilterDirective() {
  return {
    templateUrl: 'tmpl/filter.html',
    restrict: 'EA', 
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      filters: '=',
      properties: '='
    }
    
  }
  
}



angular
  .module('widgetApp')
  .directive('filter', FilterDirective);
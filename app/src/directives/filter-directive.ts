function FilterDirective() {
  return {
    templateUrl: 'tmpl/filter.html',
    restrict: 'EA',
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      filters: '<',
      properties: '=',
      onApply: '&'
    }

  }

}



angular
  .module('widgetApp')
  .directive('filter', FilterDirective);

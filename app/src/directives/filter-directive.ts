function FilterDirective() {
  return {
    templateUrl: 'tmpl/filter.html',
    restrict: 'EA', 
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: 'true',
    scope: {
      widgetFilters: '=',
      test: '='
    },
    link
    
  }
  
}

function link(scope: ng.IScope) {
  console.log(scope);
}

angular
  .module('widgetApp')
  .directive('filter', FilterDirective);
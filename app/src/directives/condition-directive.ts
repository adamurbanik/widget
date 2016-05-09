function ConditionDirective() {
  return {
    templateUrl: 'tmpl/condition.html',
    replace: true,
    restrict: 'EA',
    controller: ConditionController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      selectedFilter: '<',
      moveForward: '&',
      conditionType: '<'
    }
    
  }
}

angular
  .module('widgetApp')
  .directive('condition', ConditionDirective);
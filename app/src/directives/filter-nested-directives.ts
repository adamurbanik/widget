function FilterListDirective() {
  return {
    templateUrl: 'tmpl/filter-list.html',
    restrict: 'EA',
    replace: true
  }
}

function FilterDetailedDirective() {
  return {
    templateUrl: 'tmpl/filter-detailed.html',
    restrict: 'EA',
    replace: true,
    scope: {
      selectedFilter: '=',
      moveBackward: '&',
      moveForward: '&',
      saveFilter: '&',
      wrongInput: '='
    }
  }
}

function FilterConditionSelection() {
  return {
    templateUrl: 'tmpl/filter-condition-selection.html',
    restrict: 'EA',
    replace: true
  }
}

function FilterConditionConfiguration() {
  return {
    templateUrl: 'tmpl/filter-condition-configuration.html',
    restrict: 'EA',
    replace: true
  }
}





angular
  .module('widgetApp')
    .directive('filterList', FilterListDirective)
    .directive('filterDetailed', FilterDetailedDirective)
    .directive('filterConditionSelection', FilterConditionSelection)
    .directive('filterConditionConfiguration', FilterConditionConfiguration);











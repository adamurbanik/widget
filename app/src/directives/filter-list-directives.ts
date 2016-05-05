function FilterListDirective() {
  return {
    replace: true,
    restrict: 'EA',
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'tmpl/filter-list.html',
    // scope: {
    //   filters: '='
    // },
  }
}

function FilterDetailedDirective() {
  return {
    replace: true,
    restrict: 'EA',
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'tmpl/filter-detailed.html',
  }
}

function FilterConditionSelection() {
  return {
    replace: true,
    restrict: 'EA',
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'tmpl/filter-condition-selection.html',
  }
}

function FilterConditionConfiguration() {
  return {
    replace: true,
    restrict: 'EA',
    controller: FilterController,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'tmpl/filter-condition-configuration.html',
  }
}





angular
  .module('widgetApp')
  .directive('filterList', FilterListDirective)
  .directive('filterDetailed', FilterDetailedDirective)
  .directive('filterConditionSelection', FilterConditionSelection)
  .directive('filterConditionConfiguration', FilterConditionConfiguration);



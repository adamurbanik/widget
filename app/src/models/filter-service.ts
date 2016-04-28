class Condition {}

class Filter {

  public filterName: string;
  conditions: Condition[] = [];

  addCondition(condition: Condition) {
    this.conditions.push(condition);
  }


}

class FiltersService {

  static $inject = ['appStorage'];

  private appStorage: AppStorage;

  private conditions: any[];

  constructor(appStorage: AppStorage) {
    this.appStorage = appStorage;
    this.conditions = this.appStorage.getConditions();

  }
  getConditions() {
    return this.conditions;
  }

  createFilter(name: string) { }

  addFilter(filter: Filter): Filter[] {
    return this.appStorage.addItem(filter);
  }

  removeFilter() { }

  getFilters() {
    return this.appStorage.getFilters();
  }

  updateAttribute(name: string, property: string) {
    let index = this.getIndexByFilterName(name);
  }

  getIndexByFilterName(name: string) {
    return this
      .appStorage
      .getFilters()
      .map((filter) => filter.filterName)
      .indexOf(name);
  }
  getFilterByName(name: string) {
    return this
      .appStorage
      .getFilters()
      .filter((filter) => filter.filterName === name)[0];
  }

  addConditionToFilter(selectedCondition: any, conditionValue: any, selectedFilter: Filter) {
    let filter = this.getFilterByName(selectedFilter.filterName);
    filter.addCondition(selectedCondition);
    // return this.appStorage.updateStorage(filter);
  }

}

angular
  .module('widgetApp')
  .service('filtersService', FiltersService);
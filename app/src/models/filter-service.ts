class Condition {

  public dateTime;

}

class Filter {

  public filterName: string;
  public conditions: Condition[] = [];

  constructor() {
    this.filterName = "";
  }
  hasName(): boolean {
    return this.filterName !== "";
  }
  addCondition(condition: Condition) {
    this.conditions.push(condition);
  }
  removeCondition(condition: Condition) {
    let index = this.getIndexByStamp(condition.dateTime);
    this.conditions.splice(index, 1);
    

  }
  getIndexByStamp(dateTime: Condition) {
    return this
      .conditions
      .map((condition) => {
        return condition.dateTime;
      })
      .indexOf(dateTime);
  }
  



}

class FiltersService {

  static $inject = ['appStorage'];

  private appStorage: AppStorage;

  public conditions: any[];

  constructor(appStorage: AppStorage) {
    this.appStorage = appStorage;
    this.conditions = this.appStorage.getConditions();

  }
  getConditions() {
    return this.conditions;
  }

  createFilter(name: string) { }

  addFilter(filter: Filter): Filter[] {
    filter
    return this.appStorage.addItem(filter);
  }

  removeFilter() { }

  getFilters() {
    return this.appStorage.getFilters();
  }

  updateAttribute(name: string, property: string) {
    let index = this.getIndexByFilterName(name);
  }

  getIndexByFilterName(name: string): number {
    return this
      .appStorage
      .getFilters()
      .map((filter) => filter.filterName)
      .indexOf(name);
  }
  getFilterByName(name: string): Filter {
    return this
      .appStorage
      .getFilters()
      .filter((filter) => filter.filterName === name)[0];
  }

  checkIfExists(name: string): boolean {
    return (this.getFilterByName(name) !== void 0) ? true : false;

  }
  saveFilter(name: string, filter: Filter) {

    let filterExists: boolean = filter.hasName();
    filter.filterName = name;

    if (filterExists) {
      let index = this.getIndexByFilterName(filter.filterName)
      this.appStorage.updateStorage(index, filter);
    }
    else {
      this.appStorage.addItem(filter);
    }
  }


}

angular
  .module('widgetApp')
  .service('filtersService', FiltersService);
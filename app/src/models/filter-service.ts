class ConditionsStorage {
  public and: Condition[] = [];
  public or: Condition[] = [];

}

class Condition {

  public dateTime;
  public property;
  public value;
  public operator;
  

}

class Filter {

  public filterName: string;
  public conditions: ConditionsStorage = new ConditionsStorage();

  public state: string;

  constructor() {
    this.filterName = "";
  }
  hasName(): boolean {
    return this.filterName !== "";
  }
  addCondition(condition: Condition) {
    (this.state === 'AND') ? this.conditions.and.push(condition) : this.conditions.or.push(condition);
  }
  removeCondition(condition: Condition) {
    let indexStateObj = this.getIndexByStamp(condition.dateTime);    
    this.conditions[indexStateObj.state].splice(indexStateObj.index, 1);
    
  }
  getIndexByStamp(dateTime: Condition) {
    let state: string = "";
    let index = this
      .conditions
      .and
      .map((condition) => {
        return condition.dateTime;
      })
      .indexOf(dateTime);
      state = 'and';

    if (index === -1) {
      index = this
        .conditions
        .and
        .map((condition) => condition.dateTime)
        .indexOf(dateTime);
        state = 'or';
    }
    
    return {
      index,
      state
    } 

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
  saveFilter(filter: Filter) {

    let index = this.getIndexByFilterName(filter.filterName)

    if (index !== -1) {
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
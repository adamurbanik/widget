class Property {
  name: string;
}

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
    (this.state === 'and') ? this.conditions.and.push(condition) : this.conditions.or.push(condition);
  }
  removeCondition(condition: Condition) {
    let indexStateObj = this.getIndexByStamp(condition.dateTime);
    this.conditions[indexStateObj.state].splice(indexStateObj.index, 1);
  }
  getIndexByStamp(dateTime: Condition) {
    let state: string = "";
    let index = this.conditions.and
      .map(condition => condition.dateTime)
      .indexOf(dateTime);
    state = 'and';

    if (index === -1) {
      index = this.conditions.and
        .map(condition => condition.dateTime)
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

  filters: Filter[];
  
  setFilters(filters: Filter[]) {
    this.filters = filters;
  }
  getIndexByFilterName(name: string): number {
    return this.filters
      .map(filter => filter.filterName)
      .indexOf(name);
  }
  getFilterByName(name: string): Filter {
    return this.filters
      .filter(filter => filter.filterName === name)[0];
  }
  checkIfExists(name: string): boolean {
    return (this.getFilterByName(name) !== void 0); 
  }
  saveFilter(filter: Filter) {
    let index = this.getIndexByFilterName(filter.filterName);
    (index !== -1) ? this.filters[index] = filter : this.filters.push(filter);
    return this.filters;
  }


}

angular
  .module('widgetApp')
  .service('filtersService', FiltersService);
  
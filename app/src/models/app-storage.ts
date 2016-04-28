class AppStorage {

  private localStorage: LocalStorage;

  private filters: Filter[] = [];
  private conditions: any[] = [];

  constructor(localStorage: LocalStorage) {
    this.localStorage = localStorage;
    this.filters = localStorage.getStorage();
    this.conditions = localStorage.getConditions();



  }

  addItem(filter: Filter): Filter[] {
    this.filters.push(filter);
    return this.filters;
  }
  removeItem(index: number): Filter[] {
    this.filters.splice(index, 1);
    return this.filters;
  }
  getFilters(): Filter[] {
    return this.filters;
  }
  getConditions(): any[] {
    return this.conditions;
  }





}

angular
  .module('widgetApp')
  .service('appStorage', AppStorage);
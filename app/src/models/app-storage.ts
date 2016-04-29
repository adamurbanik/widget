class AppStorage {

  static $inject = ['localStorage'];

  private filters: Filter[] = [];
  private conditions: any[] = [];
  private localStorage: LocalStorage;
  
  constructor(localStorage: LocalStorage) {
    
    this.localStorage = localStorage;

    this.filters = localStorage.getStorage();
    this.conditions = localStorage.getConditions();



  }

  addItem(filter: Filter): Filter[] {
    this.filters.push(filter);
    this.localStorage.updateStorage(this.filters);
    return this.filters;
  }
  removeItem(index: number): Filter[] {
    this.filters.splice(index, 1);
    this.localStorage.updateStorage(this.filters);    
    return this.filters;
  }
  updateStorage(index, filter): Filter[] {
    this.filters[index] = filter;
    this.localStorage.updateStorage(this.filters);    
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
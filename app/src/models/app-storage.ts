class AppStorage {

  static $inject = ['localStorage'];

  private localStorage: LocalStorage;
  private filters: Filter[] = [];

  constructor(localStorage: LocalStorage) {
    this.localStorage = localStorage;
  }
  
  addItem(filter: Filter): Filter[] {
    this.filters.push(filter);
    this.localStorage.updateStorage('filters', this.filters);
    return this.filters;
  }
  
  removeItem(index: number): Filter[] {
    this.filters.splice(index, 1);
    this.localStorage.updateStorage('filters', this.filters);
    return this.filters;
  }
  
  getFilters(): Filter[] {
    return this.filters;
  }
    
    
}

angular
  .module('widgetApp')
  .service('appStorage', AppStorage);
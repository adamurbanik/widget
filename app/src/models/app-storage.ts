class AppStorage {

  static $inject = ['localStorage'];

  private localStorage: LocalStorage;
  private filters: Filter[];
  private properties: any[];
  
  constructor(localStorage: LocalStorage) {
    
    this.localStorage = localStorage;

    this.filters = localStorage.getStorage();
    this.properties = localStorage.getProperties();


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
  getProperties(): any[] {
    return this.properties;
  }




}

angular
  .module('widgetApp')
  .service('appStorage', AppStorage);
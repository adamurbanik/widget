class AppStorage {


  private filters: Filter[] = [];

  constructor() {}
  
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
  updateAttribute(filterName: string, property: string) {
    
  }
  

    
}

angular
  .module('widgetApp')
  .service('appStorage', AppStorage);
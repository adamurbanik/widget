class Filter {

  private index: number;
  private name: string;
  private age: number;
  private skill: string;
  private degree: string;
  private regionalTeam: string;
  private spokenLanguages: string;
  private availability: string;

  static properties: string[] = ['age', 'skill', 'degree', 'regionalTeam', 'spokenLanguages', 'availability'];

  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
  setAge(age: number) {
    this.age = age;
  }
  getSkill(): string {
    return this.skill;
  }
  setSkill(skill: string) {
    return this.skill;
  }
  getDegree(): string {
    return this.degree;
  }
  setDegree(degree: string) {
    this.degree = degree;
  }
  getRegionalTeam(): string {
    return this.regionalTeam;
  }
  setRegionalTeam(regionalTeam: string) {
    this.regionalTeam = regionalTeam;
  }
  getSpokenLanguages(): string {
    return this.spokenLanguages;
  }
  setSpokenLanguages(spokenLanguages: string) {
    this.spokenLanguages = spokenLanguages;
  }
  getAvailability(): string {
    return this.availability;
  }
  setAvailability(availability: string) {
    this.availability = availability;
  }

}

class FiltersService {

  static $inject = ['appStorage'];

  private appStorage: AppStorage;

  private filterProperties: string[] = Filter.properties;

  constructor(appStorage: AppStorage) {
    this.appStorage = appStorage;
  }

  getFilterProperties() {
    return this.filterProperties;
  }

  createFilter(name: string) {
    return new Filter(name);
  }

  addItem(name: string) {
    return this.appStorage.addItem(this.createFilter(name));
  }

  removeItem() { }

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
      .map((filter) => filter.getName())
      .indexOf(name);
     
  }

}

angular
  .module('widgetApp')
  .service('filtersService', FiltersService);
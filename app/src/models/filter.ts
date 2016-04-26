class Filter {

  private name: string;
  private age: number;
  private skill: string;
  private degree: string;
  private regionalTeam: string;
  private spokenLanguages: string;
  private availability: string;

  static properties: string[] = ['name', 'age', 'skill', 'degree', 'regionalTeam', 'spokenLanguages', 'availability'];

  constructor(name: string) {
    this.name = name;
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

  private filterProperties: string[] = Filter.properties; 

  
  getFilterProperties() {
    return this.filterProperties;
  }

  createFilter() { }

  addItem() { }

  removeItem() { }

}

angular
  .module('widgetApp')
  .service('filtersService', FiltersService);
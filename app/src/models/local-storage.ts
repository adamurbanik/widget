class LocalStorage {

  public inputData = {
    "conditions": [
      {
        "name": "priority",
        "operators": [
          "equals", "notEquals", "lt", "gt"
        ],
        "mulitipleSelection": true,
        "type:": "number"
      },
      {
        "name": "type",
        "operators": [
          "equals", "notEquals"
        ],
        "mulitipleSelection": true,
        "type:": "number"
      },
      {
        "name": "subject",
        "operators": [
          "doesContainWords", "doesNotContainWords"
        ],
        "mulitipleSelection": false,
        "type:": "number"
      },
      {
        "name": "age",
        "operators": [],
        "mulitipleSelection": false,
        "type:": "number"
      }
    ]
  }

  public returnData = {};



  getProperties() {
    return this.inputData.conditions || [];
  }

  getStorage(): any {
    return [];
  }

  updateStorage(filters: Filter[]) {
    this.returnData = angular.toJson(filters);
    console.log(this.returnData);
  }

}

angular
  .module('widgetApp')
  .service('localStorage', LocalStorage);

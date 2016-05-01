class LocalStorage {

  public dummyData = {
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



  getConditions() {
    return this.dummyData.conditions || [];
  }

  getStorage(): any {
    return [];
  }

  updateStorage(filters: Filter[]) {
    this.returnData = angular.toJson(filters);
    console.log(this.returnData);
    // console.log(JSON.parse(this.returnData))

  }

}

angular
  .module('widgetApp')
  .service('localStorage', LocalStorage);




[{
  "conditions": {
    "and": [
      {
        "name": "age",
        "operators": [],
        "mulitipleSelection": false,
        "type:": "number",
        "value": "19",
        "dateTime": 1462107876783
      },
      {
        "name": "priority",
        "operators": ["equals", "notEquals", "lt", "gt"],
        "mulitipleSelection": true,
        "type:": "number",
        "value": "very big priority",
        "dateTime": 1462107912909
      }],
    "or": [
      {
        "name": "type",
        "operators": ["equals", "notEquals"],
        "mulitipleSelection": true,
        "type:": "number",
        "value": "computer science",
        "dateTime": 1462107895062
      }
    ]
  },
  "filterName": "Adam",
  "state": "AND"
}]
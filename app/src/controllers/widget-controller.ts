class WidgetController {

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

  private returnData = {};
  private filters: Filter[];
  private properties: Property[];

  constructor() {
    this.properties = this.getProperties();
  }
  getProperties() {
    return this.inputData.conditions || [];
  }
  updateStorage(filters: Filter[]) {
    this.returnData = angular.toJson(filters);
    console.log(this.returnData);
  }




}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);
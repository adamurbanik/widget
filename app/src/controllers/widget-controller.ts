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

  public dummyFilters = [
    {
      "conditions":
      {
        "and": [
          {
            "property": "priority",
            "operator": "equals",
            "value": "less priority",
            "dateTime": 1462627645997
          },
          {
            "property": "type",
            "operator": "equals",
            "value": "some type",
            "dateTime": 1462627656115
          },
          {
            "property": "subject",
            "value": "mathematics",
            "dateTime": 1462627664603
          }
        ],
        "or": [
          {
            "property": "age",
            "value": "19",
            "dateTime": 1462627669899
          }
        ]
      },
      "filterName": "adam",
      "state": "or"
    },
    {
      "conditions": {
        "and": [
          {
            "property": "subject",
            "operator": "doesContainWords",
            "value": "computer science",
            "dateTime": 1462627747504
          },
          {
            "property": "priority",
            "operator": "equals",
            "value": "big priority",
            "dateTime": 1462627768648
          }
        ],
        "or": []
      },
      "filterName": "kasia", "state": "or"
    },
    {
      "conditions":
      {
        "and": [],
        "or": [
          {
            "property": "subject",
            "value": "compulsion theory",
            "dateTime": 1462627808918
          }
        ]
      },
      "filterName": "mariusz", "state": "or"
    }
  ]








  public returnData = {};
  public filters: any[] = [];
  public properties: Property[];

  constructor() {
    this.properties = this.getProperties();
    this.filters = this.dummyFilters;
    //this.filters = this.dummyFilters.map(filter => new Filter())
    console.log(this.filters);
  }
  getProperties() {
    return this.inputData.conditions || [];
  }
  applyFilter(filters: Filter[]) {
    console.log(this.filters);
    this.returnData = angular.toJson(filters);
    console.log(this.returnData);
  }




}


angular
  .module('widgetApp')
  .controller('WidgetController', WidgetController);

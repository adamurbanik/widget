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



  getConditions() {
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




[{
  "conditions": {
    "and": [
      {
        "property": "priority",
        "operator": "equals",
        "value": "very big priority",
        "dateTime": 1462119438847
      },
      {
        "property": "type",
        "operator": "equals",
        "value": "some type",
        "dateTime": 1462119451075
      },
      {
        "property": "subject",
        "operator": "doesContainWords",
        "value": "mathematics",
        "dateTime": 1462119460451
      }
    ],
    "or":
    [
      {
        "property": "age",
        "value": "12",
        "dateTime": 1462119466459
      }
    ]
  },
  "filterName": "adam",
  "state": "OR"
},
  {
    "conditions":
    {
      "and": [
        {
          "property": "priority",
          "operator": "equals",
          "value": "not a big prority",
          "dateTime": 1462119496112
        }
      ],
      "or": [
        {
          "property": "type",
          "operator": "equals",
          "value": "another type",
          "dateTime": 1462119510903
        }
      ]
    },
    "filterName": "kasia",
    "state": "OR"
  }
]
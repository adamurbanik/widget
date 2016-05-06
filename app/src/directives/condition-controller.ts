class ConditionController {

  public selectedFilter: Filter;
  public moveForward: Function;
  public conditionType: string;


  deleteCondition(condition: Condition) {
    this.selectedFilter.removeCondition(condition);
  }
  addCondition(type: string) {
    this.selectedFilter.state = type;
    this.moveForward();
  }


}

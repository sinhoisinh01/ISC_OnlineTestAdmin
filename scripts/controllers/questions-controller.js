app.controller("QuestionsController",function($scope,$http,$route,DTOptionsBuilder){
  $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);
  $scope.questions = [
    {
      "id":1,
      "content":"Tại sao nước biển lại mặn ?",
      "level":7
    },{
        "id":2,
        "content":"Tại sao nước biển lại mặn ?",
        "level":7
    },{
        "id":3,
        "content":"Tại sao nước biển lại mặn ?",
        "level":7
    },{
        "id":4,
        "content":"Tại sao nước biển lại mặn ?",
        "level":7
    },{
        "id":5,
        "content":"Tại sao nước biển lại mặn ",
        "level":7
    },{
        "id":6,
        "content":"Tại sao nước biển lại mặn",
        "level":7
    },{
        "id":7,
        "content":"Tại sao nước biển lại mặn",
        "level":7
    },{
        "id":8,
        "content":"Tại sao nước biển lại mặn",
        "level":7
    },{
        "id":9,
        "content":"Tại sao nước biển lại mặn",
        "level":7
    },{
        "id":10,
        "content":"Tại sao nước biển lại mặn",
        "level":7
    },{
        "id":11,
        "content":"Tại sao nước biển lại mặn",
        "level":7
    }
  ];
});
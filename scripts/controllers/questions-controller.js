app.controller("QuestionsController",function($scope,$http,$routeParams,$route,DTOptionsBuilder){
  $scope.question = null;
  $scope.singleOrPassage = 'single';
  $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);
  $scope.questions = [
    {
      "id":1,
      "content":"Tại sao nước biển lại mặn ?",
      "type": 'Passage - True/False'
    },{
        "id":2,
        "content":"Tại sao nước biển lại mặn ?",
        "type": 'Multiple Choice'
    },{
        "id":3,
        "content":"Tại sao nước biển lại mặn ?",
        "type": 'True/False'
    },{
        "id":4,
        "content":"Tại sao nước biển lại mặn ?",
        "type": 'Text In The Blank'
    },{
        "id":5,
        "content":"Tại sao nước biển lại mặn ",
        "type": 'Passage - Multiple Choice'
    },{
        "id":6,
        "content":"Tại sao nước biển lại mặn",
        "type": 'Multiple Choice'
    },{
        "id":7,
        "content":"Tại sao nước biển lại mặn",
        "type": 'Multiple Choice'
    },{
        "id":8,
        "content":"Tại sao nước biển lại mặn",
        "type": 'Multiple Choice'
    },{
        "id":9,
        "content":"Tại sao nước biển lại mặn",
        "type": 'Multiple Choice'
    },{
        "id":10,
        "content":"Tại sao nước biển lại mặn",
        "type": 'Multiple Choice'
    },{
        "id":11,
        "content":"Tại sao nước biển lại mặn",
        "type": 'Multiple Choice'
    }
  ];
  if($routeParams && $routeParams.id){
    for(var i = 0; i<$scope.questions.length;i++)
    {
      if($scope.questions[i].id === Number($routeParams.id))
      {
        $scope.question = $scope.questions[i];
        break;
      }
    }
    console.log($scope.question);
  }
});

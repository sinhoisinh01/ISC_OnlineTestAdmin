app.controller("QuestionsController",function($scope,$http,$routeParams,$route,DTOptionsBuilder){
  $scope.question = null;
  $scope.answerTypeFileName = null;
  $scope.singleOrPassage = '';
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
  $scope.createQuestionByType = function() {
    $scope.answerTypeFileName = 'questions-' + ($scope.answerType + $scope.singleOrPassage).toUpperCase();
    $scope.answerTypeUrl = "./views/questions/" + $scope.answerTypeFileName + ".html";
    console.log($scope.answerTypeUrl);
  }

  $scope.addChoice = function() {
    var myEl = angular.element( '#choice' );
    var charACSII = 65;
    myEl.append('<div class="input-group">'+
              '<span class="input-group-addon">'+
                '<input type="checkbox">'+
              '</span>'+
            '<span class="input-group-addon">'+
              '<label>&#'+
                ( charACSII + ( myEl.children())['length'] )+
                ';.</label>'+
            '</span>'+
            '<input type="text" class="form-control">'+
        '</div>');
  };

  $scope.removeChoice = function() {
    var innerEl = angular.element('#choice').children();
    var lastchild = innerEl['length']-1;
    innerEl[lastchild].remove();
    console.log(angular.element('#choice').children());
  };
});

app.controller("QuestionController",function($scope,$http,$routeParams,$route,DTOptionsBuilder){
  $scope.name = "question";
  $scope.isHomePage = false;
  $scope.isAddPage = false;
  $scope.isEditPage = false;
  if( $route.current.loadedTemplateUrl.includes("index.html") )
    $scope.isHomePage = true;
  else if( $route.current.loadedTemplateUrl.includes("add.html") )
    $scope.isAddPage = true;
  
  $scope.question = null;
  $scope.answerType = 'default';
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
    if( $scope.answerType ) {
      $scope.answerTypeFileName = ($scope.answerType + $scope.singleOrPassage);
      $scope.answerTypeUrl = "./views/question/add-question/" + $scope.answerTypeFileName + ".html";
      console.log($scope.answerTypeUrl);
    }
    else {
      $scope.answerTypeFileName = null;
    }
  }

/*QuestionsMTPCController*/
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
/*--------------------QuestionsMTPCController*/

/*TextController*/
  
  $scope.addAnswer = function() {
    var answers = angular.element( '#answers' );
    var lenght = answers.find('tbody').children().length;
    answers.append('<tr>'+
          '<td><label>'+
                (lenght+1)+
                '</label></td>'+
          '<td><input type="text" class="form-control" placeholder="Answer'+(lenght+1)+'"></td>'+
          '</tr>'   
        );
  };

  $scope.removeAnswer = function() {
    var answers = angular.element( '#answers' ).find('tbody').children();
    var length = answers.length;
    if(length === 1)
      return 0;
    answers[length-1].remove();
  };
/*--------------*/
});

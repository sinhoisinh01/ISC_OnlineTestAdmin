<<<<<<< HEAD
app.controller("QuestionController",function($scope,$http,$routeParams,$route,questionFactory,PartFactory,DTOptionsBuilder){
=======
app.controller("QuestionController",function($scope,$http,$routeParams,$route,DTOptionsBuilder, QuestionFactory){
>>>>>>> f0e0ffae64cd9217c91f64d1e4f541b8c0d4cbae
  $scope.name = "question";
  $scope.isHomePage = false;
  $scope.isAddPage = false;
  $scope.isEditPage = false;
  if( $route.current.loadedTemplateUrl.includes("index.html") )
    $scope.isHomePage = true;
  else if( $route.current.loadedTemplateUrl.includes("add.html") )
    $scope.isAddPage = true;
  

  $scope.question = {
    "queContent": "",
    "queIsshuffle": false, //false,
    "queScore":  "",//3,
    "queOpt_Column": "", //2,
    "queIsBank": false, //false,
    "queLevel": "", //1,
    "queMedia": "", //"gas",
    "queReference": "" ,//"jkfsjdfh",
    "queOrder": "",  //2,
  };
  
//$scope.questions = {queIsBank : true};
 
     
    function load(){
    PartFactory.findAllforQ(function(data){
      $scope.list = data;        
      }, function(error){});
    }
    load();
 

  $scope.answerType = 'default';
  $scope.answerTypeFileName = null;
  $scope.singleOrPassage = '';
  $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);
  var answerTypeId = "0";


  $scope.questions = [];

  if ($routeParams.part_id) {

  } else {
    QuestionFactory.findAll(function(response) {
      console.log(response);
      $scope.questions = response;

    }, function(error) {});
  }

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

$scope.addquestion = function(){

    // get Data form ckeditor
    $scope.question.queContent = CKEDITOR.instances.mtpcEditor.getData();  
    

    // set answerTypeId
    if($scope.answerType == "multiple-choice")
      answerTypeId = "2";
    else if($scope.answerType == "true-false"){
      answerTypeId = "1";
    }
    console.log($scope.selectPartforQ);
    // add  question
    questionFactory.add($scope.partId,answerTypeId,$scope.question,function(sucess){
        
    },function(error){

    });

  };
 

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

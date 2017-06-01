app.controller("QuestionController",function($scope, $http, $routeParams, $route, $uibModal, DTOptionsBuilder, PartFactory, QuestionFactory, ImageGalleryFactory){
  $scope.name = "question";
  $scope.isHomePage = false;
  $scope.isAddPage = false;
  $scope.isEditPage = false;

  $scope.images = [];
  $scope.imageChose = [];
  $scope.currentImage;


  if( $route.current.loadedTemplateUrl.includes("index.html") )
    $scope.isHomePage = true;
  else if( $route.current.loadedTemplateUrl.includes("add.html") )
    $scope.isAddPage = true;
  $scope.partId = null;

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


  /*$scope.questions = [];

  if ($routeParams.part_id) {

  } else {
    QuestionFactory.findAll(function(response) {
      console.log(response);
      $scope.questions = response;

    }, function(error) {});
  }
*/
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

     $scope.question.queContent = "";  

    // get Data form ckeditor 
     console.log($scope.question);
    
    // set answerTypeId
    if($scope.answerType == "multiple-choice"){
      answerTypeId = "2";

       $scope.question.queContent = CKEDITOR.instances.mtpcEditor.getData(); 
    }
    else if($scope.answerType == "true-false"){
      
      answerTypeId = "1";

      $scope.question.queContent = CKEDITOR.instances.mtpcpEditorTF.getData(); 
         
    }
    $scope.partId = jQuery("#select-part-forQ").val();

    if($scope.partId === "? undefined:undefined ?" || $scope.partId === null){
       alertify.logPosition("bottom right");
       alertify.error("Please select part");
      return 0;
    }


    // add  question
    QuestionFactory.add($scope.partId,answerTypeId,$scope.question,function(sucess){
        alertify.logPosition("bottom right");
        alertify.success("Add new question success");
        setTimeout(function(){window.location.href="#!/questions"},2000);

    },function(error){
        alertify.logPosition("bottom right");
        alertify.error(error);

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
$scope.openImage= function(){
  $scope.partId = jQuery("#select-part-forQ").val();
  ImageGalleryFactory.findAllImages($scope.partId,(data)=>{
    $scope.images = data;
    console.log($scope.images);
    $uibModal.open({
          templateUrl: 'views/question/add-question/image-gallery.html',
          scope: $scope,
          size: 'lg'
    }).result.then(function(){

    });
  },(error)=>{
    window.location.href = "./";
  });
  }
   $scope.chooseImage = function(event,index){
    var ele = event.target;
    if(jQuery(ele).not("span.full-size").length !== 0){
      if(!jQuery(ele).hasClass("image-item"))
        ele = jQuery(ele).parent();
      if(jQuery(ele).hasClass("image-item")){
        if(jQuery(ele).hasClass("choose")){
          jQuery(ele).removeClass("choose");
          $scope.imageChose.splice($scope.imageChose.indexOf(index),1);
        }
        else {
          jQuery(ele).addClass("choose");
          $scope.currentImage =  $scope.images[index].imageURL;
          $scope.question.queMedia = $scope.currentImage;
          $scope.imageChose.push(index);
        }
      }
    }
  }
  $scope.viewFullSize = function(index){
    $scope.currentImage = $scope.images[index];
    $uibModal.open({
            templateUrl: 'views/question/add-question/image-full-size.html',
            scope: $scope,
            size: 'lg'
    }).result.then(function(){

    });
  }
  $scope.showViewFullSize = function(event,index){
    var ele = event.target;
    if(!jQuery(ele).hasClass("image-item"))
      ele = jQuery(ele).parent();
    if(jQuery(ele).hasClass("image-item")){
      if(event.type === "mouseover"){
        if(!jQuery(ele).hasClass("hovering"))
        {
          jQuery(ele).addClass("hovering");
          jQuery(ele).append("<span class='full-size'>&#128065;</span>");
          jQuery(ele).find("span.full-size").on("click",() => {
            $scope.viewFullSize(index);
          });
        }
      }
      else if(event.type === "mouseleave"){
        if(jQuery(ele).hasClass("hovering")){
          jQuery(ele).find("span.full-size").off("click");
          jQuery(ele).find("span.full-size").remove();
          jQuery(ele).removeClass("hovering");
        }
      }
    }
  }
});

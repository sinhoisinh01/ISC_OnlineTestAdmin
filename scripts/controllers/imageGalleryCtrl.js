/*
 * Author: Phan Tiến Hưng
 * Description: Controller for image galery
 */
app.controller('ImageGalleryController', function($scope, $route, $uibModal, ImageGalleryFactory){
  $scope.images = [];
  $scope.imageChose = [];
  $scope.currentImage;
  load();
  function load(){
    ImageGalleryFactory.findAllImages(1,
      function (response) {
      $scope.images = response;
    },
    function (error) {
      window.location.href="./";
    });
  }
  $scope.addImage = function(){
    jQuery("input[type='file']").click();
    jQuery("input[type='file']").one("change",() => {
      this.uploadImage();
    });
  }
  $scope.uploadImage = function(){
    var file = $scope.myFile;
    ImageGalleryFactory.add(1,file,function(response){
      load();
    },function(error){
      window.location.href="./";
    });
    $scope.myFile = null;
    jQuery("input[type='file']").val(null);
  }
  $scope.deleteImage = function(){
    var flag = 0;
    for(var i = 0; i < $scope.imageChose.length ; i++){
      ImageGalleryFactory.delete($scope.images[$scope.imageChose[i]].id,function(response){
        flag++;
        if(flag === $scope.imageChose.length){
          $scope.imageChose = [];
          jQuery(".image-item").removeClass("choose");
          load();
        }
      },function(error){
        window.location.href="./";
      });
    }
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
          $scope.imageChose.push(index);
        }
      }
    }
  }
  $scope.viewFullSize = function(index){
    $scope.currentImage = $scope.images[index];
    $uibModal.open({
            templateUrl: 'views/part/image-full-size.html',
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

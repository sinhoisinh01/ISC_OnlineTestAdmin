/*
 * Author: Đoàn Phúc Sinh
 * Description: Controller for includes/header.html
 */
app.controller('HeaderController', function($scope, $cookies, LoginFactory, frontendBaseURL){
    $scope.username = $cookies.getObject("user").username;

    $scope.logout = function(){
      $cookies.remove("user");
      window.location.href = frontendBaseURL + "login.html#!";
    };
});

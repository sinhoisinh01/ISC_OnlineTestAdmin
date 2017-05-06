/*
 * Author: Đoàn Phúc Sinh
 * Description: Controller for includes/header.html
 */
app.controller('HeaderController', function($scope, Oauth2Factory){
    $scope.fullName = Oauth2Factory.getUserInfo().fullName;
    $scope.userRole = Oauth2Factory.getUserInfo().userRole;
    $scope.logout = function(){
      Oauth2Factory.logout();
      window.location.href = "login.html#!";
    };
});

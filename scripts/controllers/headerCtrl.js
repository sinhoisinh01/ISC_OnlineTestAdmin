app.controller('HeaderController', function($scope,$cookies,LoginFactory, frontendBaseURL){
    $scope.logout = function(){
      $cookies.remove("user");
      window.location.href = frontendBaseURL + "login.html#!";
    };
});

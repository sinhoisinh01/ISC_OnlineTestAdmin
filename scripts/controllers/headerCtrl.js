app.controller('HeaderController', function($scope,Oauth2Factory, frontendBaseURL){
    $scope.logout = function(){
      Oauth2Factory.logout();
      window.location.href = frontendBaseURL + "login.html#!";
    };
});

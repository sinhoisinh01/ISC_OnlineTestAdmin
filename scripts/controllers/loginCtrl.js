app.controller('LoginController', function($scope,$cookies,Oauth2Factory){
    $scope.login = function(){
            frontendBaseURL = "http://127.0.0.1:8887/";
            var userName = $scope.userid;
            var password = $scope.password;
            Oauth2Factory.login(userName,password).then(function(response){
              $cookies.putObject("user",{
                accessToken : response.data.access_token,
                refreshToken : response.data.refresh_token
              });
              window.location.href = frontendBaseURL + "index.html#!";
            },function(error){

              
            });
    };
});

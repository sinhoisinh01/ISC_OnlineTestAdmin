app.controller('LoginController', function($scope,$cookies,LoginFactory){
    $scope.login = function(){
            //frontendBaseURL = "http://127.0.0.1:8887/";
            console.log();
            var userName = $scope.userid;
            var password = $scope.password;

            LoginFactory.login(userName,password).then(function(response){
            
              $cookies.putObject("user",{
                accessToken : response.data.access_token,
                refreshToken : response.data.refresh_token
              });
              window.location.href = "./";
            },function(error){
              console.log(error);
              // location.reload();
            });
    };
});

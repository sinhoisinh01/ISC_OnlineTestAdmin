app.controller('LoginController', function($scope,$cookies,LoginFactory){
    $scope.login = function(){
      var userName = $scope.username;
      var password = $scope.password;

      LoginFactory.login(userName,password).then(function(response){
        $cookies.putObject("user",{
          username: $scope.username,
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

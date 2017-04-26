app.controller('LoginController', function($scope,$cookies,LoginFactory){
    $scope.login = function(){
            var userName = $scope.userid;
            var password = $scope.password;
            LoginFactory.login(userName,password).then(function(response){
              console.log(response);
            });
    };
});

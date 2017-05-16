app.controller('LoginController', function($scope, Oauth2Factory, Alertifier){
    $scope.login = function(){
      var userName = $scope.username;
      var password = $scope.password;
      Oauth2Factory.login(userName,password,function(data){
        window.location.href = "./";
      },function(error){
        Alertifier.showMessage("error","Wrong username or password !",".message-container");
      });
    };
});

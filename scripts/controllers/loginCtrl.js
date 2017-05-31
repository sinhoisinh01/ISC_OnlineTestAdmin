app.controller('LoginController', function($scope, Oauth2Factory, Alertifier){
    $scope.login = function(){
      var userName = $scope.username;
      var password = $scope.password;
      jQuery("body").append('<div class="loading"><div class="loader"><svg class="circular-loader"viewBox="25 25 50 50" ><circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#2C3E50" stroke-width="5" /></svg></div></div>');
      jQuery("body div.loading").css("padding-top",jQuery("body").height()/2);
      Oauth2Factory.login(userName,password,function(data){
        jQuery("body div.loading").remove();
        window.location.href = "./";
      },function(error){
        jQuery("body div.loading").remove();
        Alertifier.showMessage("error","Wrong username or password !",".message-container");
      });
    };
});

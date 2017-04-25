app.controller('LoginController', function($scope,$cookies,LoginFactory){
    $scope.login = function(){
            var userName = $scope.userid;
            var password = $scope.password;
            Login.login(userName,password).then(function(response){
            if(response.data.errorCode === 1)
            {
                alert("Sai ID hoặc Password !!");
            }
            else if(response.data.errorCode === 0)
            {
                $cookies.put('cookie',response.data.user.accessToken);
                var cookie = $cookies.get('cookie');
                var fullName = response.data
                console.log(cookie);
            }
        });
    };
});

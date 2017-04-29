app.controller('UserController', function($scope, $http, $route, $cookies, $routeParams, DTOptionsBuilder, userFactory, userTypeFactory, frontendBaseURL, md5) {
	$scope.name = "user";
	$scope.userTypes = [];
	$scope.isHomePage = false;
	$scope.isAddPage = false;
	$scope.isEditPage = false;
	$scope.passwordValidation = {
		"allowWeakPassword": false,
		"isStrongPassword": false,
		"isPasswordAcceptable": false
	};

	if( $route.current.loadedTemplateUrl.includes("index.html") )
		$scope.isHomePage = true;
	else if( $route.current.loadedTemplateUrl.includes("add.html") )
		$scope.isAddPage = true;
		console.log($cookies.getObject("user"));
	$scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);

    /*
	 * Author: Doan Phuc Sinh
	 * Get UserTypes From Database
     */
    userTypeFactory.findAllUserType()
	.then(function (response) {
	  $scope.userTypes = response.data;
	});

	/*
	 * Author: Doan Phuc Sinh
	 * Check Strong Password
	 * Using function isStrongPassword in validate.js
     */
	$scope.passwordValidation.checkPasswordStrength = function(password) {
		$scope.passwordValidation.isStrongPassword = isStrongPassword(password);
		if ( $scope.passwordValidation.isStrongPassword == true
			|| $scope.passwordValidation.allowWeakPassword == true )
			$scope.passwordValidation.isPasswordAcceptable = true;
		else $scope.passwordValidation.isPasswordAcceptable = false;
	};


	/*Hai writes*/

	id = $routeParams.id;
	if(id === undefined){
		console.log("a");
		userFactory.findAlluser(function (response) {
	     	$scope.Users = response.data;
	    }, function(error) {
	      	//$scope.Users = response.statusText;
	  });
	}
	else{
		userFactory.findByid(id).then(function mySucces(response){
			$scope.User = response.data;
		});
	}

	$scope.delete = function(id){
		var id = id;
		userFactory.deleteUser(id).then(function mySucces(response){
		for(i = 0; i < $scope.Users.length; i++) {
			if ( $scope.Users[i].id == id ) {
				$scope.Users.splice(i, 1);
			}
		}
		});
	};


	$scope.update = function(id,user){
		user.userDate = new Date()
		userFactory.saveUser(id,user).then(function mySucces(response){

		},function myError(response){}
		);
	};

	$scope.create = function(){
		currentTime = new Date().getTime();
		newUserInfo = {
		    "userName": $scope.newUser.userName,
		    "userEncPassword": md5.createHash($scope.newUser.userEncPassword),
		    "userFirstName": $scope.newUser.userFirstName ? $scope.newUser.userFirstName : "",
		    "userLastName": $scope.newUser.userLastName ? $scope.newUser.userLastName : "",
		    "userDOB": $scope.newUser.userDOB.getTime(),
		    "userGender": $scope.newUser.userGender,
		    "userEmail": $scope.newUser.userEmail,
		    "userPhone": $scope.newUser.userPhone ? $scope.newUser.userPhone : "",
		    "userIsActive": 0,
		    "userDate": currentTime,
		    "userType": JSON.parse($scope.newUser.userType)
	  	};
		userFactory.createUser(newUserInfo)
		.then(function (response) {
			window.location.href = frontendBaseURL + "#!/users";
		},
		function (error) {});
	}

});

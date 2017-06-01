app.controller('UserController', function($scope, $route, $routeParams, DTOptionsBuilder, userFactory, Oauth2Factory, userTypeFactory, HelperFactory, md5, Alertifier) {
	$scope.name = "user";
	$scope.userId = Oauth2Factory.getUserInfo().userId;
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
		console.log(Oauth2Factory.getUserInfo());
	$scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);

    /*
	 * Author: Doan Phuc Sinh
	 * Get UserTypes From Database
     */
    userTypeFactory.findAllUserType(
    	function (response) {
		  $scope.userTypes = response;
		},
		function (error) {

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
		userFactory.findAlluser(function (data) {
	     	$scope.Users = data;
	     	$scope.userId = Oauth2Factory.getUserInfo().userId;
	    }, function(error) {
	      	//$scope.Users = response.statusText;
	  });
	}
	else{
		userFactory.findById(id, function(data) {
			$scope.user = data;
			$scope.user.userGender = $scope.user.userGender + '';
		});
	}

	$scope.delete = function(id){
		Alertifier.confirm("warn","Are you sure you want to remove this user ?",function(){
			var id = id;
			userFactory.delete(id,function(response){
			  for(i = 0; i < $scope.Users.length; i++) {
					if ( $scope.Users[i].id == id ) {
					  $scope.Users.splice(i, 1);
					}
				}
		},
		function (error) {

		});
		},function(){

		});
	};


	$scope.update = function(id, user){
		user.userDOB = new Date(user.userDOB).getTime();
		userFactory.edit(id,user,
		function (data){
			Alertifier.alert("success","Edit successfully !");
		},
		function (error){
			Alertifier.alert("error","Edit failed !");
		});
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
		userFactory.add(newUserInfo,
		function (response) {
			window.location.href = HelperFactory.BASE_FE_URL + "#!/users";
		},
		function (error) {

		});
	}

});

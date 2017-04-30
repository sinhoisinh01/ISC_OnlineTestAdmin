app.controller('UserProfileController', function($scope, $cookies, DTOptionsBuilder, userFactory, frontendBaseURL, md5) {
	$scope.currentUser = {};
	$scope.passwordValidation = {
		"allowWeakPassword": false,
		"isStrongPassword": false,
		"isPasswordAcceptable": false,
		"checkPasswordStrength" : function(password) {
		$scope.passwordValidation.isStrongPassword = isStrongPassword(password);
		if ( $scope.passwordValidation.isStrongPassword == true
			|| $scope.passwordValidation.allowWeakPassword == true )
			$scope.passwordValidation.isPasswordAcceptable = true;
		else $scope.passwordValidation.isPasswordAcceptable = false;
	}
	};

	userFactory.findByid($cookies.getObject("user").userId,
	function (data) {
		console.log(data);
		data.userDOB = new Date(parseInt(data.userDOB));
		$scope.currentUser = data;
		$scope.currentUser.userGender = data.userGender + '';
	},
	function (error) {

	});	
});
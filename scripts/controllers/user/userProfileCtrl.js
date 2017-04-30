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

	userFactory.findById($cookies.getObject("user").userId,
	function (data) {
		data.userDOB = new Date(parseInt(data.userDOB));
		$scope.currentUser = data;
		$scope.currentUser.userGender = data.userGender + '';
	},
	function (error) {

	});

	$scope.updateInfo = function() {
		$scope.currentUser.DOB = $scope.currentUser.userDOB.getTime();
		userFactory.edit($scope.currentUser.id, $scope.currentUser,
		function (response) {
			alert("Your information has been changed");
		},
		function (error) {

		});
	};

	$scope.changePassword = function() {
		oldPasswordEnc = md5.createHash($scope.oldPassword);
		newPasswordEnc = md5.createHash($scope.newPassword);
		if ( oldPasswordEnc != $scope.currentUser.userEncPassword ) {
			alert("Your Old Password is Wrong");
		}
		else {
			$scope.currentUser.userEncPassword = newPasswordEnc;
			$scope.currentUser.DOB = $scope.currentUser.userDOB.getTime();
			userFactory.edit($scope.currentUser.id, $scope.currentUser,
			function (response) {
				alert("Your Password has been changed");
				location.reload();
			},
			function (error) {

			});
		}
	};
});
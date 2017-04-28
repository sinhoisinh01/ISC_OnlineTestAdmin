app.controller('UserController', function($scope,$http,$route,$cookies,$routeParams,DTOptionsBuilder,userFactory, userTypeFactory) {
	$scope.name = "user";
	$scope.userTypes = [];
	$scope.isHomePage = false;
	$scope.isAddPage = false;
	$scope.isEditPage = false;
	if( $route.current.loadedTemplateUrl.includes("index.html") )
		$scope.isHomePage = true;
	else if( $route.current.loadedTemplateUrl.includes("add.html") )
		$scope.isAddPage = true;
		console.log($cookies.getObject("user"));
		console.log("Yo");
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


	/*Hai writes*/

	id = $routeParams.id;
	if(id===undefined){
		userFactory.findAlluser().then(function mySucces(response) {
	     	$scope.Users = response.data;
	    }, function myError(response) {
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
		//var userDate = 1491843600000;
		//var userDOB = 1491843600000;
		var CreateUser = {
			    "userName": $scope.userName,
			    "userEncPassword": $scope.userEncPassword,
			    "userFirstName": $scope.userFirstName,
			    "userLastName": $scope.userLastName,
			    "userDOB": 1491843600000,
			    "userGender": $scope.userGender,
			    "userEmail": $scope.userEmail,
			    "userPhone": $scope.userPhone,
			    "userIsActive": 1,
			    "userDate": 1491238800000,
			    "userType": {
			      "id": 1,
			      "userTypeName": "admin",
			      "userTypeIsAdmin": false,
			      "userTypeNote": "admin"
			    }
			  };
			 
			 console.log(CreateUser);
		userFactory.createUser(CreateUser).then(function mySucces(response){

		},function myError(response){}
		);
	}

});

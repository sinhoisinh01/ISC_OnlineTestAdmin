app.controller('UserController', function($scope,$http,$route,$cookies,$routeParams,DTOptionsBuilder,userFactory) {
	$scope.name = "user";
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
	/*$scope.Users=[
	{'ID': '0948', 'password': '****', 'firstName' : 'A', 'lastName' : 'Nguyen Van' , 'dob' : '1/1/2001', 'gender' : 'Male', 'email' : 'anv@gmail.com', 'phone' : '0948111'},
	{'ID': '0913', 'password': '****', 'firstName' : 'B', 'lastName' : 'Nguyen Van' , 'dob' : '2/2/2002', 'gender' : 'Female', 'email' : 'bnv@gmail.com', 'phone' : '0913222'},
	{'ID': '0127', 'password': '****', 'firstName' : 'C', 'lastName' : 'Nguyen Van' , 'dob' : '3/3/2003', 'gender' : 'Male', 'email' : 'cnv@gmail.com', 'phone' : '0127333'}
	];*/



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
	
	$scope.Delete = function(id){
		var id = id;
		userFactory.deleteUser(id).then(function mySucces(response){
		for(i = 0; i < $scope.Users.length; i++) {
			if ( $scope.Users[i].id == id ) {
				$scope.Users.splice(i, 1);
			}
		}
		});
	};


	$scope.Update = function(id,user){
		user.userDate = new Date()
		userFactory.saveUser(id,user).then(function mySucces(response){

		},function myError(response){}
		);
	};

	$scope.Create = function(){
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

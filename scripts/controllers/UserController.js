app.controller('UserController', function($scope,$http,$route,DTOptionsBuilder) {
	$scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);
	$scope.Users=[
	{'ID': '0948', 'password': '****', 'firstName' : 'A', 'lastName' : 'Nguyen Van' , 'dob' : '1/1/2001', 'gender' : 'Male', 'email' : 'anv@gmail.com', 'phone' : '0948111'},
	{'ID': '0913', 'password': '****', 'firstName' : 'B', 'lastName' : 'Nguyen Van' , 'dob' : '2/2/2002', 'gender' : 'Female', 'email' : 'bnv@gmail.com', 'phone' : '0913222'},
	{'ID': '0127', 'password': '****', 'firstName' : 'C', 'lastName' : 'Nguyen Van' , 'dob' : '3/3/2003', 'gender' : 'Male', 'email' : 'cnv@gmail.com', 'phone' : '0127333'}
	];
});
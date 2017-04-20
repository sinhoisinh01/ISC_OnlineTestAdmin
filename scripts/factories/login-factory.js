app.factory("Login", function($http){
	return {
		login : function(userName,password){
			var param = {
				"userName": userName,
				"password": password
			};
			var url = "http://www.saigontech.edu.vn/lib-api/login.php";
			return $http.post(url,param);
		}
	}
});

//var baseUrl = "http://www.saigontech.edu.vn/";
//var urls = {};
//urls.userLogin = baseUrl + "proshop-api/login.php";
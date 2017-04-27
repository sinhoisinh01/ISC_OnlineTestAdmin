// Phan Tiến Hưng
// Login Factory
app.factory("LoginFactory", function($http, $httpParamSerializer, $cookies){
	return {
		login : function(username,password){
				var url = baseUrl + "/oauth/token?grant_type=password&username="+username+"&password="+password;
				var clientId = "Basic " + btoa("my-trusted-client:secret");
				var request = {
					method: 'POST',
					url:url,
					headers:{
						"Authorization" : clientId,
						"Accept": "application/json"
					},
				};

				return $http(request);
		},
		refreshToken : function(){
				var user = $cookies.getObject("user");
				if(user && user.refresh_token)
				{
					var url = baseUrl + "/oauth/token?grant_type=refresh_token&refresh_token=" + user.refresh_token;
					var request = {
						method : 'POST',
						url : url,
						headers:{
							"Authorization" : "Basic " + btoa("my-trusted-client:secret"),
							"Accept": "application/json"
						}
					};
					return $http(request);
				}
				return null;
		},
		isLogined: function(){
			if($cookies.get("user"))
				return true;
			return false;
		}
	}
});

<<<<<<< HEAD
var baseUrl = "http://localhost:8000/onlinetest";
=======
var baseUrl = "http://localhost:8181/onlinetest";
>>>>>>> da000dea3b5784f62c79b2ba9ec31ccdb07812db
var urls = {};

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
			if($cookies.getObject("user"))
				return true;
			return false;
		}
	}
});


var baseUrl = "http://localhost:8080/onlinetest";
var urls = {};

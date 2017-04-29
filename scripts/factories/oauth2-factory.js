// Phan Tiến Hưng
// Login Factory
app.factory("Oauth2Factory", function($http, $httpParamSerializer, $cookies, HelperFactory){
	return {
		login : function(username,password){
				var url = HelperFactory.BASE_BE_URL + "oauth/token?grant_type=password&username="+username+"&password="+password;
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
		logout : function(){
				$cookies.remove("user");
		},
		refreshToken : function(success = null , fail = null){
				var user = $cookies.getObject("user");
				if(user && user.refreshToken)
				{
					var url = HelperFactory.BASE_BE_URL + "oauth/token?grant_type=refresh_token&refresh_token=" + user.refreshToken;
					var request = {
						method : 'POST',
						url : url,
						headers:{
							"Authorization" : "Basic " + btoa("my-trusted-client:secret"),
							"Accept": "application/json"
						}
					};
					$http(request).then(
						(response) => {
							user.refreshToken = response.data.refresh_token;
							user.accessToken  = response.data.access_token;
							success();
						},
						(error) => {
							if(error.status === 401)
							{
								if(error.data.error === "invalid_token"){
									this.logout();
									fail();
								}
							}
							else if(error.status === 400)
							{
								if(error.data.error === "invalid_grant"){
									this.logout();
									fail();
								}
							}
						}
					);
				}
				else{
					success(null);
					fail({error:"is_not_logined"});
				}
		},
		isLogined: function(){
			if($cookies.getObject("user"))
				return true;
			return false;
		}
	}
});

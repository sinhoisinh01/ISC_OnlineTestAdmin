// Phan Tiến Hưng
// API Factory
app.factory("APIFactory", function($http, $httpParamSerializer, $cookies, Oauth2Factory, HelperFactory){
	return {
		fixUrl : function(apiName,params = null){
			if(params && Array.isArray(params))
			{
				for(var i = 0; i < params.length; i++)
				{
					apiName = apiName.replace("$" + (i+1),params[i]);
				}
			}

			if(Oauth2Factory.isLogined())
     		return HelperFactory.BASE_BE_URL + apiName;
			else
				return null;
    },
    tokenIsExpired : function(){

    },
		request : function(method, apiName, params = null, data = null, success = null, fail = null){
			var req = {
				method : method,
				url : this.fixUrl(apiName,params),
				data : data,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Authorization" : "Bearer " + $cookies.getObject("user").accessToken
				}
			};
			$http(req).then(
				function(response){
					success(response.data);
				},
				function(error){
					if(error.status = 401)
					{
						if(error.data.error === "invalid_token"){
							Oauth2Factory.refreshToken(
								function(){
									$http(req).then(
										function(response){
											success(response);
										}
									)
								},
								function(error){
									fail(error.data);
								});
						}
					}
					else{
						fail(error.data);
					}
				}
			)
		},
    post : function(apiName,params = null,data = null, success = null, fail = null){
			this.request("POST",apiName,params,data,success,fail);
    },
    get : function(apiName,params = null,success = null, fail = null){
			this.request("GET",apiName,params,null,success,fail);
    },
    put : function(apiName,params = null,data = null, success = null, fail = null){
			this.request("PUT",apiName,params,data,success,fail);
    },
    delete : function(apiName,params = null, success = null, fail = null){
			this.request("DELETE",apiName,params,null,success,fail);
    },
		apiName : function(name){
			return API_URL[name];
		}
	}
});
var API_URL = {
	"GET_USER"     : "api/user",
	"GET_USER_BY_ID" : "api/user/$1",
	"CREATE_USER"  : "api/user",
	"UPDATE_USER"  : "api/user/$1",
	"DELETE_USER"  : "api/user/$1",

	"GET_SUBJECT"     : "api/subject",
	"GET_SUBJECT_BY_ID" : "api/subject/$1",
	"CREATE_SUBJECT"  : "api/subject",
	"UPDATE_SUBJECT"  : "api/subject/$1",
	"DELETE_SUBJECT"  : "api/subject/$1",

	"GET_USER_TYPE"     : "api/usertype",
	"GET_USER_TYPE_BY_ID" : "api/usertype/$1",
	"CREATE_USER_TYPE"  : "api/usertype",
	"UPDATE_USER_TYPE"  : "api/usertype/$1",
	"DELETE_USER_TYPE"  : "api/usertype/$1"
};

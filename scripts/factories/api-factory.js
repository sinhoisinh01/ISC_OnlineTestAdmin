// Phan Tiến Hưng
// API Factory
app.factory("APIFactory", function($http, $httpParamSerializer, $cookies, Oauth2Factory){
	return {
		fixUrl : function(apiName,params = null){
      var url = "/" + apiName;
      for(var i = 0 ; i < params.length ; i++)
      {

      }


    },
    refreshToken : function(){
			 return Oauth2Factory.refreshToken();
    },
    oauth2Header : function(request){
			request["headers"]["Authorization"] = "Bearer " + $cookies.getObject("user").accessToken;
			return request;
    },
    post : function(apiName, params = null, data = null){
			var request = {
				method : "POST",
				url : API_URL + fixUrl(apiName,params),
				data : data,
				headers :{}
			},
			request = oauth2Header(request);
    },
    get : function(){

    },
    put : function(){

    },
    delete : function(){

    }
	}
});

var API_URL = "http://localhost:8080/onlinetest/api";
var urls = {};

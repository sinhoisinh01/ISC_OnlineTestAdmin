// Phan Tiến Hưng
// API Factory
app.factory("APIFactory", function($http, $httpParamSerializer, $cookies){
	return {
		fixUrl : function(apiName,params = null){
      var url = "/" + apiName;
      for(var i = 0 ; i < params.length ; i++)
      {

      }
    },
    tokenIsExpired : function(){

    },
    oauth2Header : function(){

    },
    post : function(){

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

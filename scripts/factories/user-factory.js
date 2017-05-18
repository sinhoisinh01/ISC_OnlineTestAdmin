app.factory("userFactory",function(APIFactory){
	// var url = "http://localhost:8080/onlinetest/api/user";
	// var cookieWObject = $cookies.getObject("user");
	// var token = cookieWObject.accessToken;
	return{
		findAlluser : function(success = null, fail = null){
			return APIFactory.get( APIFactory.apiName("GET_USER"),null,success,fail );
		},


		findById : function( id, success = null , fail = null ) {

			return APIFactory.get( APIFactory.apiName("GET_USER_BY_ID"),[id],success,fail );
		},

		add : function( user,success = null, fail = null ) {
			return APIFactory.post(APIFactory.apiName("CREATE_USER"), null,user,success,fail);
		},

		edit : function(id,user,success = null, fail = null){
			return APIFactory.put(APIFactory.apiName("UPDATE_USER"),[id],user,success,fail);
		},

		delete : function(id,success = null, fail = null){
			return APIFactory.delete( APIFactory.apiName("DELETE_USER"),[id],success,fail );
		}
	}
});
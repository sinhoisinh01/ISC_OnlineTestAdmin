
app.factory("userTypeFactory",function(APIFactory){
	/*var url = "http://localhost:8180/onlinetest/api/usertype";
	var cookieWObject = $cookies.getObject("user");
	var token = cookieWObject.accessToken;*/
	return{	

		findAllUserType : function(success = null, fail = null){
			return APIFactory.get( APIFactory.apiName("GET_USER_TYPE"),null,success,fail );
		},

		findByid : function( id, success = null, fail = null ){
      		return APIFactory.get(APIFactory.apiName("GET_USER_TYPE_BY_ID"),[id],success,fail);
		},

		deleteUserType : function(id,success = null, fail = null){
			return APIFactory.delete(APIFactory.apiName("DELETE_USER_TYPE"),[id],success,fail);
		},

		saveUserType : function(id,subject,success = null, fail = null){
			return APIFactory.put(APIFactory.apiName("UPDATE_USER_TYPE"),[id],subject,success,fail);
		},

		createUserType : function(subject,success = null, fail = null) {
			return APIFactory.post(APIFactory.apiName("CREATE_USER_TYPE"),null,subject,success,fail);
		}
	}
});
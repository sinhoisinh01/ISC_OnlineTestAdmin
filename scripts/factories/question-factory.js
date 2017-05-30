app.factory("QuestionFactory",function(APIFactory){
	// var url = "http://localhost:8080/onlinetest/api/user";
	// var cookieWObject = $cookies.getObject("user");
	// var token = cookieWObject.accessToken;
	return{
		findAll : function(success = null, fail = null){
			return APIFactory.get(APIFactory.apiName("GET_QUESTIONS"),null,success,fail);
		},


		findById : function( id, success = null, fail = null ){
      		return APIFactory.get(APIFactory.apiName("GET_QUESTION_BY_ID"),[id],success,fail);
		},

		remove : function(id,success = null, fail = null){
			return APIFactory.delete(APIFactory.apiName("DELETE_QUESTION"),[id],success,fail);
		},

		edit : function(id,subject,success = null, fail = null){
			return APIFactory.put(APIFactory.apiName("UPDATE_QUESTION"),[id],subject,success,fail);
		},

		create : function(subject,success = null, fail = null) {
			return APIFactory.post(APIFactory.apiName("CREATE_QUESTION"),null,subject,success,fail);
		}


	}
});

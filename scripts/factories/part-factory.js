app.factory("PartFactory",function(APIFactory){
	// var url = "http://localhost:8080/onlinetest/api/user";
	// var cookieWObject = $cookies.getObject("user");
	// var token = cookieWObject.accessToken;
	return{
		findAll : function(subjectId, success = null, fail = null){
			return APIFactory.get(APIFactory.apiName("GET_PART_BY_SUBJECT"),[subjectId],success,fail);
		},


		findById : function( id, success = null, fail = null ){
      		return APIFactory.get(APIFactory.apiName("GET_PART_BY_ID"),[id],success,fail);
		},

		remove : function(id,success = null, fail = null){
			return APIFactory.delete(APIFactory.apiName("DELETE_PART"),[id],success,fail);
		},

		edit : function(id,subject,success = null, fail = null){
			return APIFactory.put(APIFactory.apiName("UPDATE_PART"),[id],subject,success,fail);
		},

		create : function(subject,success = null, fail = null) {
			return APIFactory.post(APIFactory.apiName("CREATE_PART"),null,subject,success,fail);
		}


	}
});

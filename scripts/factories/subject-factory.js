app.factory("SubjectFactory",function(APIFactory){
	// var url = "http://localhost:8080/onlinetest/api/user";
	// var cookieWObject = $cookies.getObject("user");
	// var token = cookieWObject.accessToken;
	return{
		findAll : function(success = null, fail = null){
			return APIFactory.get(APIFactory.apiName("GET_SUBJECT"),null,success,fail);
		},


		findById : function( id, success = null, fail = null ){
      		return APIFactory.get(APIFactory.apiName("GET_SUBJECT_BY_ID"),[id],success,fail);
		},

		remove : function(id,success = null, fail = null){
			return APIFactory.delete(APIFactory.apiName("DELETE_SUBJECT"),[id],success,fail);
		},

		edit : function(id,subject,success = null, fail = null){
			return APIFactory.put(APIFactory.apiName("UPDATE_SUBJECT"),[id],subject,success,fail);
		},

		create : function(subject,success = null, fail = null) {
			subject.subName = unescape(encodeURIComponent(subject.subName ));
			console.log(subject.subName);
			return APIFactory.post(APIFactory.apiName("CREATE_SUBJECT"),null,subject,success,fail);
		}


	}
});

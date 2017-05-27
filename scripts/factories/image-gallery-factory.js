app.factory("ImageGalleryFactory",function(APIFactory){
	// var url = "http://localhost:8080/onlinetest/api/user";
	// var cookieWObject = $cookies.getObject("user");
	// var token = cookieWObject.accessToken;
	return{
		findAllImages : function(partId, success = null, fail = null){
			return APIFactory.get( APIFactory.apiName("GET_IMAGES"),[partId],success,fail);
		},

		findById : function(id, success = null , fail = null ) {

			return APIFactory.get( APIFactory.apiName("GET_IMAGE_BY_ID"),[id],success,fail);
		},

		add : function(partId, image, success = null, fail = null ) {
			return APIFactory.uploadFile(APIFactory.apiName("CREATE_IMAGE"), [partId],image,success,fail);
		},

		edit : function(id, image, success = null, fail = null){
			return APIFactory.put(APIFactory.apiName("UPDATE_IMAGE"),[id],user,success,fail);
		},

		delete : function(id, success = null, fail = null){
			return APIFactory.delete( APIFactory.apiName("DELETE_IMAGE"),[id],success,fail);
		}
	}
});

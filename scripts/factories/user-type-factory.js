
app.factory("userTypeFactory",function(APIFactory){
	/*var url = "http://localhost:8180/onlinetest/api/usertype";
	var cookieWObject = $cookies.getObject("user");
	var token = cookieWObject.accessToken;*/
	return{	

		findAllUserType : function(success = null, fail = null){
			return APIFactory.get( APIFactory.apiName("GET_USER_TYPE"),null,success,fail );
		},


		findByid : function(id){
			
			return $http.get(url + "/" + id + "?access_token=" + token );
		},

		deleteUserType : function(id){
			return $http.delete(url + "/" + id + "?access_token=" + token );
		},

		saveUserType : function(id,userType){
			return $http.put(url + "/" + id + "?access_token=" + token ,userType,{
    			headers : {
        			'Content-Type' : 'application/json',
    			}
			});
		},



		createUserType : function(userType){
			return $http.post(url  + "/?access_token=" + token ,userType);
		}


	}
});
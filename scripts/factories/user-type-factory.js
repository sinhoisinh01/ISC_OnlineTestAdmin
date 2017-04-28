
app.factory("userTypeFactory",function($http,$cookies){
	var url = "http://localhost:8080/onlinetest/api/usertype";
	var cookieWObject = $cookies.getObject("user");
	var token = cookieWObject.accessToken;
	return{	

		findAllUserType : function(){			
			return $http.get(url + "/?access_token=" + token);
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
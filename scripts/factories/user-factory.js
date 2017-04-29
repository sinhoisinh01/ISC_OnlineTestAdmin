app.factory("userFactory",function(APIFactory){
	// var url = "http://localhost:8080/onlinetest/api/user";
	// var cookieWObject = $cookies.getObject("user");
	// var token = cookieWObject.accessToken;
	return{
		findAlluser : function(success = null, fail = null){
			return APIFactory.get(APIFactory.apiName("GET_USER"),null,success,fail);
		},


		findByid : function(id){

			return $http.get(url + "/" + id + "?access_token=" + token );
		},

		deleteUser : function(id){
			return $http.delete(url + "/" + id + "?access_token=" + token );
		},

		saveUser : function(id,user){
			alert(user.userName + " " + user.userDOB);
			return $http.put(url + "/" + id + "?access_token=" + token ,user,{
    			headers : {
        			'Content-Type' : 'application/json',
    			}
			});
		},

		createUser : function(user) {
			req = {
			 "method": "POST",
			 "url": url  + "/?access_token=" + token,
			 "headers": {
			   "Content-Type": "application/json"
			 },
			 "data": user
			};
			return $http(req);
		}


	}
});

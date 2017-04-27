<<<<<<< HEAD
app.factory("userFactory",function($http,$cookies){
	var url = "http://localhost:8000/onlinetest/api/user";
	var cookieWObject = $cookies.getObject("user");
	var token = cookieWObject.accessToken;
	return{	
=======
app.factory("userFactory",function($http){
	var url = "http://localhost:8181/ISC_OnlineTestRestful/user/";
	return{

		
>>>>>>> da000dea3b5784f62c79b2ba9ec31ccdb07812db
		findAlluser : function(){			
			return $http.get(url + "?access_token=" + token);
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



		createUser : function(user){
			return $http.post(url  + "?access_token=" + token ,user);
		}


	}
});
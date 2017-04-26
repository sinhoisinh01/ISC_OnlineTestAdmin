app.factory("userFactory",function($http){
	var url = "http://localhost:8000/Spring4MVCCRUDRestService/user/";
	return{

		
		findAlluser : function(){			
			return $http.get(url);
		},

		findByid : function(id){
			return $http.get(url + id);
		},

		deleteUser : function(id){
			return $http.delete(url + id);
		},

		saveUser : function(id,user){
			var param = user;	
			return $http.put(url + id,user,{
    			headers : {
        			'Content-Type' : 'application/json',
    			}
			});
		},

		createUser : function(user){
			var param = user;
			alert(user.name);
			return $http.post(url,param);
		}


	}
});
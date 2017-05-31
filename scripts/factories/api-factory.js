// Phan Tiến Hưng
// API Factory
app.factory("APIFactory", function($http, $httpParamSerializer, $cookies, Oauth2Factory, HelperFactory){
	return {
		fixUrl : function(apiName,params = null){
			if(params && Array.isArray(params))
			{
				for(var i = 0; i < params.length; i++)
				{
					apiName = apiName.replace("$" + (i+1),params[i]);
				}
			}

			if(Oauth2Factory.isLogined())
     		return HelperFactory.BASE_BE_URL + apiName;
			else
				return null;
    },
    tokenIsExpired : function(){

    },
		request : function(method, apiName, params = null, data = null, success = null, fail = null, isUploadFile = false){
			var formData = new FormData();
			if(isUploadFile){
				if(data.length)
				{
					for(var i = 0; i < data.length ; i++){
						formData.append('files[]', data[i]);
					}

				}
				else
					formData.append('files[]', data);
			}
			var req = {
				method : method,
				url : this.fixUrl(apiName,params),
				data : isUploadFile ? formData : JSON.stringify(data),
				transformRequest : angular.indentity,
				headers: {
					"Content-Type": isUploadFile ? undefined : "application/json; charset=utf-8",
					"Authorization" : "Bearer " + $cookies.getObject("user").accessToken
				}
			};
			$http(req).then(
				function(response){
					success(response.data);
				},
				function(error){
					if(error.status = 401)
					{
						if(error.data.error === "invalid_token"){
							Oauth2Factory.refreshToken(
								function(){
									$http(req).then(
										function(response){
											success(response);
										}
									)
								},
								function(error){
									fail(error.data);
								});
						}
					}
					else{
						fail(error.data);
					}
				}
			)
		},
		uploadFile : function(apiName,params = null,data = null, success = null, fail = null){
			this.request("POST",apiName,params,data,success,fail,true);
		},
    post : function(apiName,params = null,data = null, success = null, fail = null){
			this.request("POST",apiName,params,data,success,fail);
    },
    get : function(apiName,params = null,success = null, fail = null){
			this.request("GET",apiName,params,null,success,fail);
    },
    put : function(apiName,params = null,data = null, success = null, fail = null){
			this.request("PUT",apiName,params,data,success,fail);
    },
    delete : function(apiName,params = null, success = null, fail = null){
			this.request("DELETE",apiName,params,null,success,fail);
    },
		apiName : function(name){
			return API_URL[name];
		}
	}
});
var API_URL = {
	"GET_USER"     : "api/user",
	"GET_USER_BY_ID" : "api/user/$1",
	"CREATE_USER"  : "api/user",
	"UPDATE_USER"  : "api/user/$1",
	"DELETE_USER"  : "api/user/$1",

	"GET_IMAGES"     : "api/part/$1/image",
	"GET_IMAGE_BY_ID" : "api/part/$1/image/$2",
	"CREATE_IMAGE"  : "api/part/$1/image",
	"UPDATE_IMAGE"  : "api/user/$1",
	"DELETE_IMAGE"  : "api/image/$1",

	"GET_SUBJECT"     : "api/subject",
	"GET_SUBJECT_BY_ID" : "api/subject/$1",
	"CREATE_SUBJECT"  : "api/subject",
	"UPDATE_SUBJECT"  : "api/subject/$1",
	"DELETE_SUBJECT"  : "api/subject/$1",

	"GET_USER_TYPE"     : "api/usertype",
	"GET_USER_TYPE_BY_ID" : "api/usertype/$1",
	"CREATE_USER_TYPE"  : "api/usertype",
	"UPDATE_USER_TYPE"  : "api/usertype/$1",
	"DELETE_USER_TYPE"  : "api/usertype/$1",

	"GET_PART_BY_SUBJECT" : "/api/subject/$1/parts",
	"GET_PART_BY_ID" : "api/subject/$1/part",
	"GET_PART_FOR_Q" : "api/parts",
	"CREATE_PART" : "/api/subject/$1/part",
	"UPDATE_PART" : "/api/subject/$1/part/$2",
	"DELETE_PART" : "api/part/$1",


	"CREATE_OPTION" : "/api/option"
	"CREATE_QUESTION" : "/api/part/$1/answerType/$2/question",	
	
	"GET_QUESTIONS_BY_PART" : "api/questions/$1",
	"GET_QUESTIONS"     : "api/question",
	"GET_QUESTION_BY_ID" : "api/question/$1",
	"UPDATE_QUESTION" : "api/question/$1",
	"DELETE_QUESTION" : "api/question/$1"

};

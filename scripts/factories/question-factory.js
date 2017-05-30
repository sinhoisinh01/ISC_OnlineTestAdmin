app.factory('questionFactory', function(APIFactory){

	return{
		add : function(question, success = null, fail = null){
			return APIFactory.post(APIFactory.apiName("CREATE_QUESTION"), null,question,success,fail);
		}
	}

});
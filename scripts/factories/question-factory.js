app.factory('QuestionFactory', function(APIFactory){

	return{
		add : function(partId,answerTypeId,question, success = null, fail = null){
			return APIFactory.post(APIFactory.apiName("CREATE_QUESTION"),[partId,answerTypeId],question,success,fail);
		}
	}

});
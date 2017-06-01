app.factory('QuestionFactory', function(APIFactory){

	return{
		add : function(partId,answerTypeId,question, success = null, fail = null){
			return APIFactory.post(APIFactory.apiName("CREATE_QUESTION"),[partId,answerTypeId],question,success,fail);
		},
		findAll : function(success = null, fail = null){
			return APIFactory.get( APIFactory.apiName("GET_QUESTIONS"),null,success,fail );
		},

		findByPartId : function( part_id, success = null, fail = null ){
      		return APIFactory.get(APIFactory.apiName("GET_QUESTIONS_BY_PART"),[part_id],success,fail);
		},

		findById : function( id, success = null, fail = null ){
      		return APIFactory.get(APIFactory.apiName("GET_QUESTION_BY_ID"),[id],success,fail);
		},

		remove : function(id,success = null, fail = null){
			return APIFactory.delete(APIFactory.apiName("DELETE_QUESTION"),[id],success,fail);
		}
	}

});
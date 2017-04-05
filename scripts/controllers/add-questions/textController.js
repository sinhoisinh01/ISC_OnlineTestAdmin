app.controller("TextController",function($scope,$http,$routeParams,$route,DTOptionsBuilder){
	
	$scope.addAnswer = function() {
		var answers = angular.element( '#answers' );
		var lenght = answers.find('tbody').children().length;
		answers.append('<tr>'+
					'<td><label>'+
	         			(lenght+1)+
	         			'</label></td>'+
					'<td><input type="text" class="form-control" placeholder="Answer'+(lenght+1)+'"></td>'+
					'</tr>'  	
	 			);
	};

	$scope.removeAnswer = function() {
		var answers = angular.element( '#answers' ).find('tbody').children();
		var length = answers.length;
		if(length === 1)
			return 0;
		answers[length-1].remove();
	};

});
app.controller("QuestionsTFController",function($scope,$http,$routeParams,$route,DTOptionsBuilder){
	$scope.addChoice = function() {
		var myEl = angular.element( '#choice' );
		var charACSII = 65;
		myEl.append('<div class="input-group">'+
	            '<span class="input-group-addon">'+
	              '<input type="checkbox">'+
	            '</span>'+
	         	'<span class="input-group-addon">'+
	         		'<label>&#'+
	         			( charACSII + ( myEl.children())['length'] )+
	         			';.</label>'+
	        	'</span>'+
	        	'<input type="text" class="form-control">'+
	 			'</div>');
	};
	$scope.removeChoice = function() {
		var innerEl = angular.element('#choice').children();
		var lastchild = innerEl['length']-1;
		innerEl[lastchild].remove();
		console.log(angular.element('#choice').children());
	};
	$scope.addQuestion = function(){

	};
	$scope.resetQuestion = function(){

	};
	$scope.back = function(){

	};
});
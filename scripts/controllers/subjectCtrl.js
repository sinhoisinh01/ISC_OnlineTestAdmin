app.controller('SubjectController', function(baseURL, $cookies, $http, $scope, $route, DTOptionsBuilder, $uibModal){
	
	// Subjects only have childSubs, not grandchildSubs.
	$scope.name = "subject";
	$scope.isHomePage = false;
	$scope.isAddPage = false;
	$scope.isEditPage = false;
	if( $route.current.loadedTemplateUrl.includes("index.html") )
		$scope.isHomePage = true;
	else if( $route.current.loadedTemplateUrl.includes("add.html") )
		$scope.isAddPage = true;
	
	$scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);

    $http.get(baseURL + "subject/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
    	$scope.subjects = res.data;
    });



	$scope.addSubject = function(){
		$scope.subject = null;
		$uibModal.open({
            templateUrl: 'views/subject/modal.html',
            scope: $scope,
            size: 'md'
        }).result.then(function(subject){ 	
        	var req = {
			 "method":"POST",
			 "url": baseURL + "subject/?access_token=" + $cookies.getObject("user").accessToken,
			 "headers": {
			   "Content-Type": "application/json"
			 },
			 "data":subject
			};
        	$http(req).then(function(res){
        		console.log(res);
        	});
        });
	}

	$scope.editSubject = function(id){
		$http.get(baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
			$scope.subject = res.data;
			$uibModal.open({
	            templateUrl: 'views/subject/modal.html',
	            scope: $scope,
	            size: 'md'
	        }).result.then(function(subject){ 
	        	subject.id = id;
	        	console.log(subject);	
	        	var req = {
				 "method":"POST",
				 "url": baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken,
				 "headers": {
				   "Content-Type": "application/json"
				 },
				 "data":subject
				};
	        	$http(req).then(function(res){
	        		console.log(res);
	        	});
	        });
		});
	}

	$scope.deleteSubject = function(id){
		if( cofirm("Are you sure you want to delete?") == 1 )
			return 0;
		$http.delete(baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
    		
    	});
	}
});
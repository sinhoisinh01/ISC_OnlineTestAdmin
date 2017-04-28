app.controller('SubjectController', function(baseURL, $cookies, $http, $scope, $route, $uibModal){
	
	// Subjects only have childSubs, not grandchildSubs.
	$scope.name = "subject";
	$scope.isHomePage = false;
	$scope.isAddPage = false;
	$scope.isEditPage = false;
	if( $route.current.loadedTemplateUrl.includes("index.html") )
		$scope.isHomePage = true;
	else if( $route.current.loadedTemplateUrl.includes("add.html") )
		$scope.isAddPage = true;
	
	$scope.subjects = null;

	function load(){
		$http.get(baseURL + "subject/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
	    	$scope.subjects = res.data;
	    });
	}
    load();

    

	$scope.addSubject = function(id){
		$scope.action = 'add';
		$scope.subject = null;
		if(id == null)
			$scope.isParent = false;
		else 
		{
			$scope.isParent = true;
			$http.get(baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
				$scope.parentName = res.data.subName;
			});
		}

		$uibModal.open({
            templateUrl: 'views/subject/modal.html',
            scope: $scope,
            size: 'md'
        }).result.then(function(subject){ 	
        	subject.subId = id;
        	var req = {
			 "method":"POST",
			 "url": baseURL + "subject/?access_token=" + $cookies.getObject("user").accessToken,
			 "headers": {
			   "Content-Type": "application/json; charset=UTF-8",
			 },
			 "data":subject
			};
        	$http(req).then(function(res){
        		load();
        	});
        });
	}

	$scope.editSubject = function(id){
		$scope.action = 'edit';
		$http.get(baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
			$scope.subject = res.data;
			$uibModal.open({
	            templateUrl: 'views/subject/modal.html',
	            scope: $scope,
	            size: 'md'
	        }).result.then(function(subject){ 
	        	subject.id = id;
	        	var req = {
				 "method":"POST",
				 "url": baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken,
				 "headers": {
				   "Content-Type": "application/json; charset=UTF-8"
				 },
				 "data":subject
				};
	        	$http(req).then(function(res){
	        		load();
	        	});
	        });
		});
	}

	$scope.deleteSubject = function(id){
		if( !confirm("Are you sure you want to delete?") )
			return 0;
		$http.delete(baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
    		load();
    	});
	}
});
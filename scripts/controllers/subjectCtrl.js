app.controller('SubjectController', function(baseURL, $cookie, $http, $scope, $route, DTOptionsBuilder, $uibModal){
	
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

    $http.get(baseURL + "onlinetest/api/subject/?access_token=" + $cookie.getObject("user").accessToken).then(function(res){
    	$scope.subjects = res.data;
    });

	$scope.subjects = 
	[
		{
			id: 1, 
			subId: null, 
			subName:'Khoa học',
			childSubs:[
				{
					id: 2, 
					subId: 1, 
					subName:'Toán',
					childSubs:[
					{id: 3, subId: 2, subName: 'Toán rời rạc', childSubs: []},
					{id: 4, subId: 2, subName: 'Toán ứng dụng', childSubs: []}
					]
				},
				{id: 5, subId: 1, subName:'Lý', childSubs: []}
			]
		},
		{
			id: 6, 
			subId: null, 
			subName:'Thất học',
			childSubs:[
				{id: 7, subId: 6, subName:'Boxing', childSubs: []},
				{id: 8, subId: 6, subName:'Muay Thai', childSubs: []}
			]
		},

	]

	$scope.addSubject = function(subject){
		$http.post(baseURL + "onlinetest/api/subject/:id/?access_token=" + $cookie.getObject("user").accessToken).then(function(res){
        		console.log(res);
        	});
		$uibModal.open({
            templateUrl: 'views/subject/add.html',
            scope: $scope,
            size: 'md'
        }).result.then(function(){ 	
        	
        });
	}

	$scope.deleteSubject = function(subject){
		if(confirm("Are you sure you want to delete?"))
			return 0;
		$http.delete(baseURL + "onlinetest/api/subject/:id/?access_token=" + $cookie.getObject("user").accessToken).then(function(res){
    		
    	});
	}
});
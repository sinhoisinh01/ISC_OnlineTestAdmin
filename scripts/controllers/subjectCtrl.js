app.controller('SubjectController', function(baseURL, $http, $scope, $route, DTOptionsBuilder, $uibModal){
	
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


	$scope.addSubject = function(){
		$http.get(baseURL + "subjects").then(function(res){
        		console.log(res);
        	});
		$uibModal.open({
            templateUrl: 'views/subject/add.html',
            scope: $scope,
            size: 'md'
        }).result.then(function(){ 	
        	
        });
	}
});
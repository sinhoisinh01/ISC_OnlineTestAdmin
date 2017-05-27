app.controller('SubjectController', function($scope, $route, $uibModal, SubjectFactory, PartFactory, Alertifier, DTOptionsBuilder){

	$scope.subjectPartBox = {
	  "cssClass": "col-md-12",
	  "showParts": false,
	  "showPartsTable": false,
	  "partBoxTitle": "",
	  "parts": []
	};

	$scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);

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
		SubjectFactory.findAll(function(data){
			$scope.subjects = data;
		},function(error){
			location.href = "./login.html";
		});
	}
  load();



	$scope.addSubject = function(id){
		$scope.action = 'add';
		$scope.subject = null;
		if(id === null)
			$scope.isParent = false;
		else
		{
			$scope.isParent = true;
			// $http.get(baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken).then(function(res){
			// 	$scope.parentName = res.data.subName;
			// });
			SubjectFactory.findById(id,function(data){
				$scope.parentName = data.subName;
			},function(error){
				location.href = "./login.html";
			});
		}

		$uibModal.open({
            templateUrl: 'views/subject/modal.html',
            scope: $scope,
            size: 'md'
        }).result.then(function(subject){
        	subject.subId = id;
		      // var req = {
					//  "method":"POST",
					//  "url": baseURL + "subject/?access_token=" + $cookies.getObject("user").accessToken,
					//  "headers": {
					//    "Content-Type": "application/json; charset=UTF-8",
					//  },
					//  "data":subject
					// };
        	// $http(req).then(function(res){
        	// 	load();
        	// });
					SubjectFactory.create(subject,function(data){
						load();
					},function(error){

					});
        });
	}

	$scope.editSubject = function(id){
		$scope.action = 'edit';
		SubjectFactory.findById(id,function(data){
			$scope.subject = data;
			$uibModal.open({
	            templateUrl: 'views/subject/modal.html',
	            scope: $scope,
	            size: 'md'
	        }).result.then(function(subject){
	        	subject.id = id;
	        	// var req = {
						//  "method":"POST",
						//  "url": baseURL + "subject/"+id+"/?access_token=" + $cookies.getObject("user").accessToken,
						//  "headers": {
						//    "Content-Type": "application/json; charset=UTF-8"
						//  },
						//  "data":subject
						// };
						SubjectFactory.edit(id,subject,function(data){
							load();
						},function(error){

						});
						// $http(req).then(function(res){
	        	// 	load();
	        	// });
	        });
		},function(error){

		});

	}

	$scope.deleteSubject = function(id){
		Alertifier.confirm("warn","Are you sure you want to remove this subject ?",function(){
			SubjectFactory.remove(id,function(data){
				load();
			},function(error){

			});
		},function(){

		});
	};

	$scope.openPartsOfSubject = function(subject) {
	  $scope.subjectPartBox.showParts = true;
	  $scope.subjectPartBox.cssClass = "col-md-6";
	  $scope.subjectPartBox.partBoxTitle = subject.subName;
	  PartFactory.findAll(subject.id, function(data) {
	  	$scope.subjectPartBox.parts = data;
	  	if (data.length == 0) {
	  	  $scope.subjectPartBox.showPartsTable = false;
	  	}
	  	else {
	  	  $scope.subjectPartBox.showPartsTable = true;
	  	}
	  }, function() {});
	};

	$scope.deletePart = function(id) {
	  if (confirm("Are you sure to delete this part?") == true) {
	  	PartFactory.remove(id, function(data) {
  		  length = $scope.subjectPartBox.parts.length;
  		  for(i = 0; i < length; i++) {
			if ( $scope.subjectPartBox.parts[i].id == id ) {
			  $scope.subjectPartBox.parts.splice(i, 1);
			}
		  }
		  if ($scope.subjectPartBox.parts.length == 0) {
	  	  	$scope.subjectPartBox.showPartsTable = false;
  		  } else {
	  	  	$scope.subjectPartBox.showPartsTable = true;
	  	  }
	  	}, function() {});
	  }
	};

	$scope.addPart = function() {
		var subjectId = $scope.subjectPartBox.parts[0].subject.id;
		window.location.href = "/onlinetest/#!/part/add/" + subjectId;
	}
});

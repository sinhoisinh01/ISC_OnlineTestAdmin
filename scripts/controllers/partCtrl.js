//hong
app.controller("PartController",function($scope,$route,$http,$routeParams,DTOptionsBuilder, PartFactory, Alertifier){
	$scope.name = "part";
	$scope.isHomePage = false;
	$scope.isAddPage = false;
	$scope.isEditPage = false;

	$scope.part = {
		"id" : "",
		"parId": "",
	    "parName": "",
	    "parDirection": "",
	    "parDefault_score": "",
	    "parDefault_column": "",
	    "parDefault_level": "",
	    "parOrder": "",
	    "parNote": "",
	    "imageGallery": []
	}

	if($routeParams.id)
	{
		getPartById();
	}

	if( $route.current.loadedTemplateUrl.includes("index.html") )
		$scope.isHomePage = true;
	else if( $route.current.loadedTemplateUrl.includes("add.html") )
		$scope.isAddPage = true;
	else if( $route.current.loadedTemplateUrl.includes("edit.html") )
		$scope.isEditPage = true;

	$scope.dtOptions = DTOptionsBuilder.newOptions()
        .withDisplayLength(10)
        .withOption('bLengthChange', false);

	//Add new Part
	$scope.newPart = function(part) {
		console.log(part);
		PartFactory.create($routeParams.subjectId,part, function(data){
				Alertifier.toast("success","Save part success");
			    setTimeout(function(){window.location.href="#!/subjects"},1000);
			},function(error){
				Alertifier.toast("error",error);
			});
	}

	//update Part
	$scope.savePart = function(part){
		PartFactory.edit($routeParams.subjectId, $routeParams.id, part, function(data){
		    Alertifier.toast("success","Save part success");
		    setTimeout(function(){window.location.href="#!/subjects"},1000);
		}, function(error){
			Alertifier.toast("error",error);	
		});
	}

	$scope.cancel = function(){
		window.location.href = "#!/subjects";
	}

	//get Part By id
	function getPartById(){
		PartFactory.findById($routeParams.id, function(data){
			console.log(data);
			$scope.part = data;
		}, function(error){
			Alertifier.toast("error",error);
		});
	}

	
		
});

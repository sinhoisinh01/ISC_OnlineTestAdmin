//hong
app.controller("PartController",function($scope,$route,$routeParams,DTOptionsBuilder, PartFactory, Alertifier){
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
	    "imageGallery": ""
	}

	getPartById();

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
		PartFactory.create($routeParams.id,part, function(data){
			alertify.logPosition("bottom right");
			    alertify.success("Add new part success");
			},function(error){
				alertify.logPosition("bottom right");
			    alertify.error(error);
			});
	}

	//update Part
	$scope.savePart = function(part){
		console.log(part);
		PartFactory.edit($routeParams.subjectId, $routeParams.id, part, function(data){
			alertify.logPosition("bottom right");
		    alertify.success("Save part success");
		}, function(error){
			alertify.logPosition("bottom right");
		    alertify.error(error);
		});
	}

	//get Part By id
	function getPartById(){
		PartFactory.findById($routeParams.id, function(data){
			console.log(data);
			$scope.part = data;
		}, function(error){
			alertify.logPosition("bottom right");
		    alertify.error(error);
		});
	}

});

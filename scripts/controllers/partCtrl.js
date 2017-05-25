app.controller("PartController",function($scope,$http,$route,DTOptionsBuilder, PartFactory){
	$scope.name = "part";
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
	$scope.list = [{PAR_ID:1,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				{PAR_ID:2,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				{PAR_ID:3,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				{PAR_ID:4,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				{PAR_ID:5,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				{PAR_ID:6,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				{PAR_ID:7,PARID:1,PARTNAME:"Hai",PARDIRECTION:"long des",PARDEFAULT_SCORE:9,PARDEFAULT_COLUMN:8,PARDEFAULT_LEVEL:4,	PARORDER : "wqe",PARNOTE:'kew'},
				];

	//Add new Part
	
});

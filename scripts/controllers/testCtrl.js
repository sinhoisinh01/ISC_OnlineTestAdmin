//Hong
app.controller("TestController", function($scope,$http,$route,DTOptionsBuilder) {
	$scope.name ="test";
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
	$scope.dataTest = [
		{
			TES_ID : 1,
			TES_CODE : "TEST0001",
			TESTITLE : "English",
			TESVERSION : "Ver 1.0",
			TESDATE : "2017/03/25",
			TESTIME : 120,
			TESLANGUAGE : "English",
			TESISSHUFFLE : true,
			TESISHEADPHONE : true,
			TESISSHOWPART : true,
			TESISFRAME : true,
			TESISACTIVE : true,
			TESISLOCKED : true,
			TESPASSWORD : "iscquangtrung",
			TESENC_PASSWORD : "iscquangtrung",
			TESMAX_SCORE : 9.8,
			TESNOTE : ""
		},
		{
			TES_ID : 2,
			TES_CODE : "TEST0002",
			TESTITLE : "Lịch Sử",
			TESVERSION : "Ver 1.0",
			TESDATE : "2017/03/25",
			TESTIME : 90,
			TESLANGUAGE : "Vietnamese",
			TESISSHUFFLE : true,
			TESISHEADPHONE : true,
			TESISSHOWPART : true,
			TESISFRAME : true,
			TESISACTIVE : true,
			TESISLOCKED : true,
			TESPASSWORD : "iscquangtrung",
			TESENC_PASSWORD : "iscquangtrung",
			TESMAX_SCORE : 8.0,
			TESNOTE : ""
		},
		{
			TES_ID : 3,
			TES_CODE : "TEST0003",
			TESTITLE : "Ngữ Văn",
			TESVERSION : "Ver 1.0",
			TESDATE : "2017/03/25",
			TESTIME : 120,
			TESLANGUAGE : "Vietnamese",
			TESISSHUFFLE : true,
			TESISHEADPHONE : true,
			TESISSHOWPART : true,
			TESISFRAME : true,
			TESISACTIVE : true,
			TESISLOCKED : true,
			TESPASSWORD : "iscquangtrung",
			TESENC_PASSWORD : "iscquangtrung",
			TESMAX_SCORE : 8.0,
			TESNOTE : ""
		},
		{
			TES_ID : 4,
			TES_CODE : "TEST0004",
			TESTITLE : "Toán",
			TESVERSION : "Ver 1.0",
			TESDATE : "2017/03/25",
			TESTIME : 90,
			TESLANGUAGE : "Vietnamese",
			TESISSHUFFLE : true,
			TESISHEADPHONE : true,
			TESISSHOWPART : true,
			TESISFRAME : true,
			TESISACTIVE : true,
			TESISLOCKED : true,
			TESPASSWORD : "iscquangtrung",
			TESENC_PASSWORD : "iscquangtrung",
			TESMAX_SCORE : 10.0,
			TESNOTE : ""
		}
	];
});

app.controller("TestDetailController", function($scope,$http,$route,DTOptionsBuilder) {
	$scope.Exam_Takers = [
		{
			EXAT_ID : 1,
			EXATID : 'DCT11245',
			EXTFIRSTNAME : 'Chiến Văn',
			EXTLASTNAME : 'Nguyễn',
			EXTGENDER : 1,
			EXATDOB : '1993/12/2',
			EXATADDRESS : 'TPHCM',
			EXATEMAIL : 'abd@gmail.com',
			EXATPHONE : '01848484842',
			ANSCORRECT : 153,
			ANSSCORE : 654,
		},
		{
			EXAT_ID : 2,
			EXATID : 'DAT88788',
			EXTFIRSTNAME : 'Tiến A',
			EXTLASTNAME : 'Nguyễn',
			EXTGENDER : 1,
			EXATDOB : '1993/12/2',
			EXATADDRESS : 'TPHCM',
			EXATEMAIL : 'abd@gmail.com',
			EXATPHONE : '01848484842',
			ANSCORRECT : 100,
			ANSSCORE : 435,
		},
		{
			EXAT_ID : 3,
			EXATID : 'DUT422345',
			EXTFIRSTNAME : 'Tuấn',
			EXTLASTNAME : 'Lê',
			EXTGENDER : 1,
			EXATDOB : '1995/12/2',
			EXATADDRESS : 'TPHCM',
			EXATEMAIL : 'abd@gmail.com',
			EXATPHONE : '01848484842',
			ANSCORRECT : 80,
			ANSSCORE : 400,
		},
		{
			EXAT_ID : 4,
			EXATID : 'AVU12457',
			EXTFIRSTNAME : 'Chính',
			EXTLASTNAME : 'Tạ',
			EXTGENDER : 1,
			EXATDOB : '1995/12/2',
			EXATADDRESS : 'TPHCM',
			EXATEMAIL : 'abd@gmail.com',
			EXATPHONE : '01848484842',
			ANSCORRECT : 168,
			ANSSCORE : 800,
		}
	];
});
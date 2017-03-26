app.controller("TestController", function($scope,DTOptionsBuilder) {
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
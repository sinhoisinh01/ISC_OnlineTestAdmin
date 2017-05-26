var app = angular.module('onlineTestAdmin', ['ngRoute','datatables','ui.bootstrap', 'ngCookies','angular-md5','ngAlertify']);
app.constant("baseURL","http://localhost:8181/api/")
app.constant("frontendBaseURL","http://localhost/onlinetest/")
app.config(function($qProvider,$locationProvider,$routeProvider) {
		//$locationProvider.html5Mode(true);
		/*
			Convention:
			- get all( plural) / E.g: questions
			- get by id / E.g: question/get/:id
			- add / E.g: question/add
			- edit / E.g: question/edit
			- delete / E.g: question/delete
			...
		*/
		$qProvider.errorOnUnhandledRejections(false);
		$routeProvider
		.when("/", {
			templateUrl: "views/index.html",
		})
		.when("/users", {
			templateUrl: "views/user/index.html",
			controller: "UserController"
		})
		.when("/user/add", {
			templateUrl: "views/user/add.html",
			controller: "UserController"
		})
		.when("/user/edit/:id", {
			templateUrl: "views/user/edit.html",
			controller: "UserController"
		})
		.when("/user/profile", {
			templateUrl: "views/user/profile.html",
			controller: "UserProfileController"
		})

		.when("/subjects", {
			templateUrl: "views/subject/index.html",
			controller: "SubjectController"
		})

		.when("/parts",{
			templateUrl : "views/part/index.html",
			controller : "PartController"
		})
		.when("/part/add",{
			templateUrl : "views/part/add.html",
			controller : "PartController"
		})
		.when("/part/edit",{
			templateUrl : "views/part/edit.html",
			controller : "PartController"
		})
		.when("/part/delete",{
			controller : "PartController"
		})
		.when("/image-gallery",{
			templateUrl : "views/part/image-gallery.html",
			controller : "ImageGalleryController"
		})

		.when("/questions",{
			templateUrl: "views/question/index.html",
			controller: "QuestionController"
		})
		.when("/question/get/:id",{
			templateUrl: "views/question/detail.html",
			controller: "QuestionController"
		})
		.when("/question/add",{
			templateUrl: "views/question/add.html",
			controller: "QuestionController"
		})
		.when("/question/add/trueFalse", {
			templateUrl : "views/question/add-question/true-false.html",
			controller : "QuestionController"
		})
		.when("/question/add/trueFalsePassage", {
			templateUrl : "views/question/add-question/true-false-passage.html",
			controller : "QuestionController"
		})
		.when("/question/add/multipleChoice", {
			templateUrl : "views/question/add-question/multiple-choice.html",
			controller : "QuestionController"
		})
		.when("/question/add/multipleChoicePassage", {
			templateUrl : "views/question/add-question/multiple-choice-passage.html",
			controller : "QuestionController"
		})
		.when("/question/add/text", {
			templateUrl : "views/question/add-question/text.html",
			controller : "TextController"
		})
		.when("/question/edit",{
			templateUrl: "views/question/edit.html",
			controller: "QuestionsController"
		})
		.when("/question/delete",{
			controller: "QuestionController"
		})

		.when("/tests",{
			templateUrl : "views/test/index.html",
			controller : "TestController"
		})
		.when("/test/get/:id",{
			templateUrl: "views/test/detail.html",
			controller: "TestDetailController"
		})
		.when("/test/add",{
			templateUrl: "views/test/add.html",
			controller: "TestController"
		})
		.when("/test/edit",{
			templateUrl: "views/test/edit.html",
			controller: "TestController"
		})
		.when("/test/delete",{
			controller: "TestController"
		})
	});

app.run(function($rootScope,Oauth2Factory,HelperFactory,$http){
	$rootScope.$on('$routeChangeStart', function (event, next) {
        if (!Oauth2Factory.isLogined()) {
						event.preventDefault();
						window.location.href= "login.html";
        }

    });
});
app.directive('fileModel', ['$parse', function ($parse) {
		 return {
				restrict: 'A',
				link: function(scope, element, attrs) {
					 var model = $parse(attrs.fileModel);
					 var modelSetter = model.assign;
					 element.bind('change', function(){
							scope.$apply(function(){
								if(element[0].files.length > 1){
								 modelSetter(scope, element[0].files);
							 	}
								else {
									modelSetter(scope, element[0].files[0]);
								}
							});
					 });
				}
		 };
	}]);
function initDT(DTLoadingTemplate){

	// DTLoadingTemplate.setLoadingTemplate("<img src='./images/Preloader_2.gif' />");
	// DTDefaultOptions.setLoadingTemplate("<img src='./images/Preloader_2.gif' />");
}

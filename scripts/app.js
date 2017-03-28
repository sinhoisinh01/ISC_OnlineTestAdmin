var app = angular.module('onlineTestAdmin', ['ngRoute','datatables']);
app.config(function($locationProvider,$routeProvider) {
		//$locationProvider.html5Mode(true);
		$routeProvider
		.when("/", {
			templateUrl: "views/index.html"
		})
		.when("/users", {
			templateUrl: "views/user/usermanager.html",
			controller: "UserController"
		})
		.when("/users/add", {
			templateUrl: "views/user/adduser.html",
			controller: "UserController"
		})
		.when("/users/edit", {
			templateUrl: "views/user/edituser.html",
			controller: "UserController"
		})
		.when("/parts",{
			templateUrl : "views/Parts/index.html",
			controller : "partsController"
		})
		.when("/updateParts",{
			templateUrl : "views/Parts/updateParts.html",
			controller : "partsController"
		})
		.when("/deleteParts",{
			
			controller : "partsController"
		})
		.when("/addParts",{
			templateUrl : "views/Parts/addParts.html",
			controller : "partsController"
		})
		.when("/questions",{
			templateUrl: "views/questions/questions-index.html",
			controller: "QuestionsController"
		})
		.when("/questions/add",{
			templateUrl: "views/questions/question-add.html",
			controller: "QuestionsController"
		})
		.when("/questions/edit",{
			templateUrl: "views/questions/question-edit.html",
			controller: "QuestionsController"
		})
		.when("/questions/:id",{
			templateUrl: "views/questions/question-detail.html",
			controller: "QuestionsController"
		})
		.when("/questions/delete",{
			controller: "QuestionsController"
		})
		.when("/tests",{
			templateUrl : "views/tests/tests-index.html",
			controller : "TestController"
		})
		.when("/tests/add",{
			templateUrl: "views/tests/tests-add.html",
			controller: "TestController"
		})
		.when("/tests/edit",{
			templateUrl: "views/tests/tests-edit.html",
			controller: "TestController"
		})
		.when("/tests/:id",{
			templateUrl: "views/tests/tests-detail.html",
			controller: "TestController"
		})
		.when("/tests/delete",{
			controller: "TestController"
		});
		/*.when("/calendar", {
			templateUrl: "views/calendar.html"
		})
		.when("/stats", {
			templateUrl: "views/stats.html"
		})
		.when("/tables", {
			templateUrl: "views/tables.html"
		})
		.when("/buttons", {
			templateUrl: "views/buttons.html"
		})
		.when("/editors", {
			templateUrl: "views/editors.html"
		})
		.when("/forms", {
			templateUrl: "views/forms.html"
		})*/
	});
app.run(initDT);
function initDT(DTLoadingTemplate){
	DTLoadingTemplate.html=DTLoadingTemplate.html.replace("Loading...","<img src='./images/Preloader_2.gif' />");
	// DTLoadingTemplate.setLoadingTemplate("<img src='./images/Preloader_2.gif' />");
	// DTDefaultOptions.setLoadingTemplate("<img src='./images/Preloader_2.gif' />");
}

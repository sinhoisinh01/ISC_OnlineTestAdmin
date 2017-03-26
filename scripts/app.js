var app = angular.module('onlineTestAdmin', ['ngRoute']);
app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "views/index.html"
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
		;
	})
;
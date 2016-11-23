var app = angular.module("appNg", []);

app.factory('nameService', function () {
	var personObj = [];
	return {personObj:personObj}
})

app.controller('nameControl', function ($scope, nameService) {
	$scope.personObj = nameService.personObj;

	$scope.showTwoWay = function () {
		$scope.personObj.push({fname:$scope.fname, lname:$scope.lname})
	}
});
var app = angular.module("FoodApp", []);

app.controller("ListCtrl", ($scope) => {
	$scope.foodList = [{food: "pie"}, {food: "pizza"}, {food: "cookies"}, {food: "Tagalongs"}];
	$scope.showListView = true;
	$scope.class = "oldView";
	$scope.showFoods = () => {
		$scope.showListView = false;
		$scope.class = "list";
	};
});

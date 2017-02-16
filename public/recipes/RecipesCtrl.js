angular
	.module('recipebox')
	.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', '$location', '$state', '$firebaseArray'];

function RecipesCtrl($scope, $location, $state, $firebaseArray) {

	$scope.allRecipes;
	$scope.query = '';
	$scope.categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

	var ref = firebase.database().ref('recipes/');
	$scope.recipes = $firebaseArray(ref);
	console.log($firebaseArray(ref));
	$scope.recipes.$loaded().then(function(data) {
		$scope.allRecipes = $scope.categories.reduce($scope.recipereduce, []);
	}).catch(function(error) {
		console.log("Error ", error);
	});
	$scope.recipereduce = function(acc, curr) {
		var obj = {"category":'', "recipes": ''};
		obj.category = curr;
		obj.recipes = $scope.recipes.filter(function(item){
			if(item.type.indexOf(curr) > -1) {
				return item;
			} else if (curr === "All") {
				return item;
			};
		});
		acc.push(obj);
		return acc;
	};
	//$scope.allRecipes = $scope.categories.reduce(function(acc, value) {
	//	var obj = {"category":'', "recipes": ''};
	//	obj.category = value;
	//	$scope.recipes.$loaded()
	//		.then(function(data) {
	//			console.log(data === $scope.recipes);
	//			obj.recipes = $scope.recipes.filter(function(item) {
	//				if(item.type.indexOf(value) > -1) {
	//					return item;
	//				} else if (value === "All") {
	//					return item;
	//				};
	//			});
	//		})
	//		.catch(function(error) {
	//			console.log("Error: ", error);
	//		});
//
	//	acc.push(obj);
	//	return acc;
	//}, []);
}

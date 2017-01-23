angular
	.module('ngRecipes')
	.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', '$location', 'recipesFactory'];

function RecipesCtrl($scope, $location, recipesFactory) {

	$scope.recipes;
	$scope.allRecipes;
	$scope.query = '';
	$scope.categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];
	recipesFactory.getRecipes().then(function(response) {
		$scope.recipes = response;
		$scope.allRecipes = $scope.categories.reduce(function(acc, value) {
			var obj = {"category":'', "recipes": ''};
			obj.category = value;
			obj.recipes = $scope.recipes.filter(function(item) {
				if(item.type.indexOf(value) > -1) {
					return item;
				} else if (value === "All") {
					return item;
				};
			});
			acc.push(obj);
			return acc;
		}, []);
	}, function errorResponse(response){
		console.log(response.statusText);
	});
}

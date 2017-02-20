angular
	.module('recipebox')
	.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', '$location', '$state', '$firebaseArray', '$log'];

function RecipesCtrl($scope, $location, $state, $firebaseArray, $log) {

	$scope.allRecipes;
	$scope.query = '';
	$scope.categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

	var ref = firebase.database().ref('recipes/');
	$scope.recipes = $firebaseArray(ref);
	$scope.recipes.$loaded().then(function(data) {
		$scope.allRecipes = $scope.categories.reduce($scope.recipereduce, []);
		$scope.bigTotalItems = data.length;
		$scope.pageSize = 3;
		$scope.currentPage = 1;
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

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };


	$scope.bigCurrentPage = 1;
/////////// Add edit function to change recipe categories
/// Limit number of recipes in All
/// Limit number of recipes in sidebar or change to categories
//// Capitalize titles
}

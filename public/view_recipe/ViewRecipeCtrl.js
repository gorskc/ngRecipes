angular
	.module('recipebox')
	.controller('ViewRecipeCtrl', ViewRecipeCtrl);

ViewRecipeCtrl.$inject = ['$scope', '$stateParams', '$location', '$http', 'recipesFactory', 'sharedListService'];

function ViewRecipeCtrl($scope, $stateParams, $location, $http, recipesFactory, sharedListService) {

		$scope.path = $location.url();
		$scope.recipe;
		$scope.ingredients;
		$scope.instructions;
		$scope.source;
		$scope.redItems = function(acc, curr){
			var obj = {"item": '', "selected": ''};
			obj.item = curr;
			obj.selected = false;
			acc.push(obj);
			return acc;
		};

		$scope.selectedIngredients = function(){
			var selection = [];
			angular.forEach($scope.ingredients, function(ingredient) {
				if(ingredient.selected) {
					sharedListService.addList(ingredient.item);
				}
			});
		};

		recipesFactory.getRecipes().then(function(response){
			var path_arr = $scope.path.split('/');
			var index = path_arr.length - 1;
			var page_id = path_arr[index];
			$scope.recipe = response[page_id - 1];
			$scope.ingredients = $scope.recipe.ingredients.reduce($scope.redItems, []);
			$scope.instructions = $scope.recipe.instructions;
			var srcArray = $scope.recipe.source.split("/");
			$scope.source = srcArray[2];
		})
	};

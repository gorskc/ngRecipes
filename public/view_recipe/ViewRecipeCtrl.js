angular
	.module('recipebox')
	.controller('ViewRecipeCtrl', ViewRecipeCtrl);

ViewRecipeCtrl.$inject = ['$scope', '$stateParams', '$location', '$firebaseObject'];

function ViewRecipeCtrl($scope, $stateParams, $location, $firebaseObject) {
		$scope.ingredients;
		$scope.instructions;
		$scope.source;
		$scope.selection = [];

		$scope.path = $location.url();
		var path_arr = $scope.path.split('/');
		var index = path_arr.length - 1;
		var page_id = path_arr[index];
		console.log(page_id);
		var ref = firebase.database().ref('recipes/' + page_id);

		$scope.recipe = $firebaseObject(ref);
		$scope.recipe.$loaded()
			.then(function(data) {
				console.log(data === $scope.recipe);
				$scope.ingredients = $scope.recipe.ingredients.split(/\n/g);
				$scope.instructions = $scope.recipe.instructions.split(/\n/g);
				var srcArray = $scope.recipe.source.split("/");
				$scope.source = srcArray[2];
			})
			.catch(function(error) {
				console.log("Error: ", error);
			});

		$scope.redItems = function(acc, curr){
			var obj = {"item": '', "selected": ''};
			obj.item = curr;
			obj.selected = false;
			acc.push(obj);
			return acc;
		};

		$scope.selectedIngredients = function(){
			$scope.ingredients.forEach(function(ingredient) {
				if(ingredient.selected) {
					$scope.selection.push(ingredient.item);
				}
			});

		$scope.saveItems = function() {
			list.$add($scope.selection).then(function(ref) {
				var id = ref.key;
				console.log("added record with id " + id);
				list.$indexFor(id);
				$state.go('list');
			});
		}




}

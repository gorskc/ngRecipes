angular
	.module('recipebox')
	.controller('ViewRecipeCtrl', ViewRecipeCtrl);

ViewRecipeCtrl.$inject = ['$scope', '$stateParams', '$location', '$firebaseObject'];

function ViewRecipeCtrl($scope, $stateParams, $location, $firebaseObject) {
		$scope.ingredients;
		$scope.instructions;
		$scope.source;

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

		//console.log($scope.recipe);



		//$scope.recipe;

		//$scope.instructions;
		//$scope.source;
		//$scope.redItems = function(acc, curr){
		//	var obj = {"item": '', "selected": ''};
		//	obj.item = curr;
		//	obj.selected = false;
		//	acc.push(obj);
		//	return acc;
		//};
//
		//$scope.selectedIngredients = function(){
		//	var selection = [];
		//	angular.forEach($scope.ingredients, function(ingredient) {
		//		if(ingredient.selected) {
		//			sharedListService.addList(ingredient.item);
		//		}
		//	});
		//};
//
//

}

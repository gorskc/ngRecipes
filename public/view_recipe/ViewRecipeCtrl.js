angular
	.module('recipebox')
	.controller('ViewRecipeCtrl', ViewRecipeCtrl);

ViewRecipeCtrl.$inject = ['$scope', '$state', '$location', '$firebaseObject', '$firebaseArray'];

function ViewRecipeCtrl($scope, $state, $location, $firebaseObject, $firebaseArray) {
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
			var recipes = $scope.recipe.ingredients.split(/\n/g);
			$scope.ingredients = recipes.reduce($scope.redItems, []);
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
		$scope.ingredients.forEach(function(element) {
			if(element.selected) {
				$scope.selection.push(element.item);
			}
		});
	};

	$scope.saveItems = function() {
		var ref = firebase.database().ref('list/');
    var list = $firebaseObject(ref);
		console.log(list);
		$scope.selectedIngredients();
		list.$loaded().then(function() {
			angular.forEach($scope.selection, function(value, index) {
				if(!list.items) {
					list.items = $scope.selection;
				} else if(list.items.indexOf(value) === -1) {
					list.items[list.items.length] = value;
				}
			});
			list.$save().then(function(ref) {
				ref.key === list.$id;
			}, function(error) {
				console.log("Error: ", error);
			});
		})
	};
}

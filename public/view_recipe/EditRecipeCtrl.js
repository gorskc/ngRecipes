angular
	.module('recipebox')
	.controller('EditRecipeCtrl', EditRecipeCtrl);

EditRecipeCtrl.$inject = ['$scope', '$state', '$location', '$firebaseObject', '$firebaseArray'];

function EditRecipeCtrl($scope, $state, $location, $firebaseObject, $firebaseArray) {
	$scope.editIngredients;
	$scope.editInstructions;
	$scope.editSource;
	$scope.type = [];
	$scope.editRecipe;
	$scope.editChoices = ["Breakfast", "Lunch", "Dinner", "Dessert"];
	$scope.editPath = $location.url();
	var path_arr = $scope.editPath.split('/');
	var index = path_arr.length - 2;
	var page_id = path_arr[index];

	var ref = firebase.database().ref('recipes/' + page_id);
	var recipe = $firebaseObject(ref);
	recipe.$loaded()
		.then(function(data) {
			$scope.editRecipe = data;
			console.log($scope.editRecipe);
      $scope.recipeChoices = $scope.editChoices.reduce($scope.getType, []);
		})
		.catch(function(error) {
			console.log("Error: ", error);
		});

  $scope.getType = function(acc, value) {
    var obj = {"type": '', "selected": ''};
    obj.type = value;
    if($scope.editRecipe.type.indexOf(value) > -1) {
      obj.selected = true;
    } else {
      obj.selected = false;
    }
    acc.push(obj);
    return acc;
  }

  $scope.saveRecipe = function() {
    var ref = firebase.database().ref('recipes/' + page_id);
    var recipe = $firebaseObject(ref);
    if(!$scope.type) {
      $scope.recipeChoices.forEach($scope.getSelected);
    } else {
      $scope.type = [];
      $scope.recipeChoices.forEach($scope.getSelected);
    }
    recipe.recipename = $scope.editRecipe.recipename;
    recipe.image_url = $scope.editRecipe.image_url;
    recipe.source = $scope.editRecipe.source;
    recipe.type = $scope.type;
    recipe.ingredients = $scope.editRecipe.ingredients;
    recipe.instructions = $scope.editRecipe.instructions;
    recipe.$save().then(function(ref) {
      console.log("Changes saved.");
      $state.go('recipes');
    }).catch(function(error) {
      console.log("Error ", error);
    });

  };

  $scope.getSelected = function(value) {
    if(value.checked) {
      $scope.type.push(value.type);
    }
  };
}

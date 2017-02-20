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
      $scope.recipeChoices = $scope.editChoices.reduce($scope.getType, []);
			console.log($scope.recipeChoices);
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
		$scope.type = $scope.recipeChoices.reduce($scope.getSelected, []);

		console.log($scope.type);
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

  $scope.getSelected = function(acc, value) {
    if(value.selected) {
			console.log(value);
      acc.push(value.type);
    }
		return acc;
  };
}

angular
	.module('ngRecipes')
	.controller('CategoriesCtrl', CategoriesCtrl);

CategoriesCtrl.$inject = ['$scope', '$location', 'recipesFactory'];
function CategoriesCtrl($scope, $location, recipesFactory) {

  $scope.path = $location.path();
	$scope.recipes;
	$scope.allRecipes;
  $scope.thisRecipe;
	$scope.query = '';
	$scope.categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];
  $scope.pagefilter = function(value) {
    var path_arr = $scope.path.split('/');
    var index = path_arr.length - 1;
    var page_id = path_arr[index];
    return value.category === page_id;
  };
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

	recipesFactory.getRecipes().then(function(response) {
		$scope.recipes = response;
		$scope.allRecipes = $scope.categories.reduce($scope.recipereduce, []);
    $scope.thisRecipe = $scope.allRecipes.filter($scope.pagefilter)[0];
	}, function errorResponse(response){
		console.log(response.statusText);
	});
}

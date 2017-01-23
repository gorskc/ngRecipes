angular
	.module('ngRecipes')
	.controller('SidebarCtrl', SidebarCtrl);

SidebarCtrl.$inject = ['$scope', '$location', 'recipesFactory'];

function SidebarCtrl($scope, $location, recipesFactory) {

  $scope.path = $location.path();
	$scope.recipes;
  $scope.getActive = function(value) {
    var path_arr = $scope.path.split('/');
    var index = path_arr.length - 1;
    var page_id = path_arr[index];
    return Number(value.id) === Number(page_id);
  };
	recipesFactory.getRecipes().then(function(response) {
		$scope.recipes = response;
	}, function errorResponse(response){
		console.log(response.statusText);
	});
}

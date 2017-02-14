angular
  .module('recipebox')
  .controller('ShowNewCtrl', ShowNewCtrl);

ShowNewCtrl.$inject = ['$scope', 'sharedRecipeService'];

function ShowNewCtrl($scope, sharedRecipeService) {
  $scope.data = sharedRecipeService.getData();
  $scope.ingredients = $scope.data.ingredients.split(',');
  $scope.instructions = $scope.data.instructions.split(';');
  console.log($scope.data);
}

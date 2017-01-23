angular
  .module('ngRecipes')
  .controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ['$scope', 'sharedListService'];

function ListCtrl($scope, sharedListService) {
  $scope.data = sharedListService.getList();
}

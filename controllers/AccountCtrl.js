angular
  .module('ngRecipes')
  .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$scope', 'sharedRegService'];

function AccountCtrl($scope, sharedRegService) {
  $scope.data = sharedRegService.getData();
}

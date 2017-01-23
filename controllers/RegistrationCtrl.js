angular
  .module('ngRecipes')
  .controller('RegistrationCtrl', RegistrationCtrl);

RegistrationCtrl.$inject = ['$scope', 'sharedRegService'];

function RegistrationCtrl($scope, sharedRegService) {
  $scope.first;
  $scope.last;
  $scope.email;
  $scope.password;
  $scope.data = {};
  $scope.getFormData = function() {
    $scope.data['first'] = $scope.first;
    $scope.data['last'] = $scope.last;
    $scope.data['email'] = $scope.email;
    $scope.data['password'] = $scope.password;
    sharedRegService.addData($scope.data);
  }
}

angular
  .module('recipebox')
  .controller('RegistrationCtrl', RegistrationCtrl);

RegistrationCtrl.$inject = ['$scope', 'Auth', '$state'];

function RegistrationCtrl($scope, Auth, $state) {
  $scope.createUser = function() {
    $scope.message = null;
    $scope.error = null;

    authFactory.$createUserWithEmailAndPassword($scope.email, $scope.password)
      .then(function(firebaseUser) {
        $scope.message = "User created with uid: " + firebaseUser.uid;
        $state.go('account');
      }).catch(function(error) {
        $scope.error = error;
      });
  };

  $scope.deleteUser = function() {
    $scope.message = null;
    $scope.error = null;
    authFactory.$deleteUser().then(function() {
      $scope.message = "User deleted";
    }).catch(function(error) {
      $scope.error = error;
    });
  };
}

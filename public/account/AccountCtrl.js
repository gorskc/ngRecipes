angular
  .module('recipebox')
  .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$scope', '$state', 'currentAuth', 'Auth'];

function AccountCtrl($scope, $state, currentAuth, Auth) {
  Auth.$onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      $scope.password = user.password;
      $scope.email = user.email;
    }
  })

  $scope.updateAccount = function() {
    Auth.$updatePassword($scope.newPassword).then(function() {
      console.log("Password changed successfully!");
    }).catch(function(error) {
      console.log("Error: ", error);
    });
    Auth.$updateEmail($scope.newEmail).then(function() {
      console.log("Email changed successfully!");
    }).catch(function(error) {
      console.log("Error: ", error);
    });
    $state.go('account');
  };

  $scope.showDelete = false;
  $scope.deleteUser = function() {
    Auth.$deleteUser().then(function() {
      console.log("User removed successfully!");
    }).catch(function(error) {
      console.log("Error: ", error);
    });
  }
}

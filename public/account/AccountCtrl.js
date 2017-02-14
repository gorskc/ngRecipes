angular
  .module('recipebox')
  .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$rootScope', '$scope', '$state'];

function AccountCtrl($scope, $state) {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('accountName').textContent = user.displayName;
      document.getElementById('accountEmail').textContent = user.email;
    } else {
      console.log("logged out");
    }
  });
  $scope.updateAccount = function() {
    
  }
}

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
    var user = firebase.auth().currentUser;
    var newName = document.getElementById("newName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;
    user.updateProfile({
      displayName: newName,
      email: newEmail,
      password: newPassword
    }).then(function() {
      console.log('updated');
    }, function(error) {
      console.log(error);
    });
  }
}

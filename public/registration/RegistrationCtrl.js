angular
  .module('recipebox')
  .controller('RegistrationCtrl', RegistrationCtrl);

RegistrationCtrl.$inject = ['$scope', 'sharedRegService', '$state'];

function RegistrationCtrl($scope, sharedRegService, $state) {
  $scope.newUser = function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log(email);
        $state.go('login');
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    };
}

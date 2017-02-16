angular
  .module('recipebox')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'currentAuth', 'Auth'];
function LoginCtrl($scope, $state, currentAuth, Auth) {
  Auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      console.log(firebaseUser);
      var email = firebaseUser.email;
      var emailVerified = firebaseUser.emailVerified;
      document.getElementById('display-userName').textContent = firebaseUser.email;
    }
  })
  $scope.signIn = function() {
    //console.log(currentAuth);
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if ($scope.email.length < 4) {
      alert('Please enter a valid email address.');
      return;
    }
    if ($scope.password.length < 4) {
      alert('Please enter a password.');
      return;
    }

    Auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(response) {
      console.log(response.displayName);
      $state.go('recipes');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  };

  $scope.logOut = function() {
    Auth.$signOut().then(function(){
      console.log('Logging out');
      document.getElementById('display-userName').style.display = 'none';
      $state.go('home');
    }).catch(function(error) {
      console.log("Error signing user out:", error);
    });
  };

}

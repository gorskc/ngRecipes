angular
  .module('recipebox')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'authFactory'];
function LoginCtrl($scope, $state, authFactory) {
  $scope.signIn = function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(response) {
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
  $scope.isSignedIn = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        document.getElementById('display-login').style.visibility = 'hidden';
        $state.go('recipes');
      } else {
        $state.go('home');
      }
    })
  };
  $scope.logOut = function() {
    firebase.auth().signOut().then(function(){
      console.log('Logging out');
    }).catch(function(error) {
      console.log("Error signing user out:", error);
    });
  };

}

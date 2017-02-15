angular
  .module('recipebox')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'currentAuth', 'Auth'];
function LoginCtrl($scope, $state, currentAuth, Auth) {

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
    Auth.$signOut().then(function(){
      console.log('Logging out');
      $state.go('home');
    }).catch(function(error) {
      console.log("Error signing user out:", error);
    });
  };

}

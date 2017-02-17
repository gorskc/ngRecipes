angular
  .module('recipebox')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'Auth'];
function LoginCtrl($scope, $state, Auth) {
  $scope.loginemail;
  $scope.loginpassword;
  Auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      console.log(firebaseUser);
      $scope.displayemail = firebaseUser.email;
      document.getElementById('display-userName').textContent = $scope.displayemail;
    }
  })
  $scope.signIn = function() {
    console.log($scope.loginemail);
    Auth.$signInWithEmailAndPassword($scope.loginemail, $scope.loginpassword).then(function(response) {
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

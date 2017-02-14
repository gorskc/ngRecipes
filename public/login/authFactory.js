angular
  .module('recipebox')
  .factory('authFactory', authFactory);

authFactory.$inject = ['$firebaseAuth'];

function authFactory($firebaseAuth) {
  var firebaseAuthObject = $firebaseAuth();

  return {
    firebaseAuthObject: firebaseAuthObject,
    login: login
  }

  function login(user) {
    return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
  }
}

angular
  .module('recipebox')
  .factory('Auth', Auth);

Auth.$inject = ['$firebaseAuth'];

function Auth($firebaseAuth) {
  return $firebaseAuth();
}

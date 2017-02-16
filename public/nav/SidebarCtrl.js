angular
	.module('recipebox')
	.controller('SidebarCtrl', SidebarCtrl);

SidebarCtrl.$inject = ['$scope', '$location', '$firebaseArray'];

function SidebarCtrl($scope, $location, $firebaseArray) {

  $scope.path = $location.path();
	$scope.recipes;
  $scope.getActive = function(value) {
    var path_arr = $scope.path.split('/');
    var index = path_arr.length - 1;
    var page_id = path_arr[index];
    return value.$id == page_id;
  };

	var ref = firebase.database().ref('recipes/');
	$scope.recipes = $firebaseArray(ref);
}

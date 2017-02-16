angular
  .module('recipebox')
  .controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ['$scope', '$window', '$firebaseObject', '$firebaseArray'];

function ListCtrl($scope, $window, $firebaseObject, $firebaseArray) {
  $scope.selection = [];
  var ref = firebase.database().ref('list/');
  var list = $firebaseObject(ref);

  list.$loaded()
    .then(function(data) {
      $scope.loadedList = list.items;
      $scope.list = $scope.loadedList.reduce($scope.redItems, []);
    })
    .catch(function(error) {
      console.log("Error", error);
    });

  $scope.removeItems = function() {
    $scope.selectedItems();
    angular.forEach($scope.selection, function(value, index) {
      if(list.items.indexOf(value) > -1) {
        var i = list.items.indexOf(value);
        delete list.items[i];
      }
    });
    // Save changes made to list object
    list.$save().then(function(ref) {
      console.log("Changes saved.");
    }, function(error) {
      console.log("Error: ", error);
    });
    console.log(list.items);
    $window.location.reload();
  };

  $scope.selectedItems = function(){
		$scope.list.forEach(function(ingredient) {
			if(ingredient.selected) {
				$scope.selection.push(ingredient.item);
			}
		});
	};
  $scope.redItems = function(acc, curr){
		var obj = {"item": '', "selected": ''};
		obj.item = curr;
		obj.selected = false;
		acc.push(obj);
		return acc;
	};
}

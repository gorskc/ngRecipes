angular
  .module('recipebox')
  .controller('NewRecipeCtrl', NewRecipeCtrl);

NewRecipeCtrl.$inject = ['$scope', '$state', '$firebaseArray'];

function NewRecipeCtrl($scope, $state, $firebaseArray) {

  $scope.name;
  $scope.ingredients;
  $scope.instructions;
  $scope.source;
  $scope.image_url;
  $scope.type = [];


  $scope.saveRecipe = function() {
    var ref = firebase.database().ref('recipes/');
    var list = $firebaseArray(ref);
    if(!$scope.type) {
      $scope.choices.forEach($scope.getSelected);
    } else {
      $scope.type = [];
      $scope.choices.forEach($scope.getSelected);
    }

    list.$add({
      recipename: $scope.name,
      image_url: $scope.image_url,
      source: $scope.source,
      type: $scope.type,
      ingredients: $scope.ingredients,
      instructions: $scope.instructions
    }).then(function(ref) {
      var id = ref.key;
      console.log("added record with id " + id);
      list.$indexFor(id);
      $state.go('recipes');
    });

  };
  $scope.choices = [{
                     "type":"Breakfast",
                     "selected":false
                    },
                    {
                     "type":"Lunch",
                     "selected":false
                    },
                    {
                      "type":"Dinner",
                      "selected":false
                    },
                    {
                      "type":"Dessert",
                      "selected":false
                    }];
  $scope.getSelected = function(value) {
    if(value.checked) {
      $scope.type.push(value.type);
    }
  };


}

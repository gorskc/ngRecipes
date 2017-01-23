angular
  .module('ngRecipes')
  .controller('NewRecipeCtrl', NewRecipeCtrl);

NewRecipeCtrl.$inject = ['$scope', 'sharedRecipeService'];

function NewRecipeCtrl($scope, sharedRecipeService) {
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
  $scope.name;
  $scope.ingredients;
  $scope.instructions;
  $scope.source;
  $scope.image_url;
  $scope.type;
  $scope.data = {};
  $scope.getSelected = function(value) {
    $scope.data['type'] = [];
    if(value.selected) {
      $scope.data['type'].push(value.type);
    }
  };
  $scope.getRecipeData = function() {
    $scope.data['name'] = $scope.name;
    $scope.data['ingredients'] = $scope.ingredients;
    $scope.data['instructions'] = $scope.instructions;
    $scope.data['source'] = $scope.source;
    $scope.data['image_url'] = $scope.image_url;
    $scope.choices.forEach($scope.getSelected);
    sharedRecipeService.addData($scope.data);
  }

}

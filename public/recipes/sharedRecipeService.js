angular
  .module('recipebox')
  .service('sharedRecipeService', sharedRecipeService);

function sharedRecipeService() {
  var data = [];

  var addData = function(item) {
    data.push(item);
  };

  var getData = function() {
    return data[0];
  };

  return {
    addData : addData,
    getData : getData
  };
}

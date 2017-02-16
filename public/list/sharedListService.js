angular
  .module('recipebox')
  .service('sharedListService', sharedListService);

function sharedListService() {
  var list = [];

  var addList = function(item) {
    list.push(item);
  };

  var getList = function() {
    return list;
  };

  return {
    addList: addList,
    getList: getList
  };
}

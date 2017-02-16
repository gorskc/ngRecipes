angular
  .module('recipebox')
  .service('sharedRegService', sharedRegService);

function sharedRegService() {
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

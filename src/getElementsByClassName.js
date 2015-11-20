// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  // define new recursive function
  var searchNodes = function(node){
    if(node.className.indexOf(className) >= 0){
      //add to results
      results.push(node);
    }
    //search through nodes
    for (var i = 0; i < node.children.length; i++){
      searchNodes(node.children[i]);
    }
  }
  searchNodes(document.body);
  return results;
};


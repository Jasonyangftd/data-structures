var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.numChildren = 0;

  // your code here
  newTree.children = {};
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var number = 0;
  this.children[this.numChildren] = Tree(value);
  this.numChildren++;

};

treeMethods.contains = function(target){
  var result = false;
  var test = function(branch){
    _.each(branch, function(item){
      if (target === item.value){
        result = true;
      }
      if (item.children !== undefined){
        test(item.children);
      }
    });
  };
  test(this.children);
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

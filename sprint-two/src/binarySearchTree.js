var BinarySearchTree = function(value){
  var methods = Object.create(BinarySearchTree.prototype);
  methods.value = value;
  methods.left = null;
  methods.right = null;
  return methods;
};

BinarySearchTree.prototype.insert = function(value){
  var inner = function(branch){
    if (value > branch.value){
      if(!branch.right){
        branch.right = BinarySearchTree(value);
      } else {
        inner(branch.right);
      }
    } else {
      if(!branch.left){
        branch.left = BinarySearchTree(value);
      } else {
        inner(branch.left);
      }
    }
  }
  inner(this);
}

BinarySearchTree.prototype.contains = function(has){
  var ans = false;
  this.depthFirstLog(function(thing){
    if (thing === has){
      ans = true;
    }
  });
  return ans;


}

BinarySearchTree.prototype.depthFirstLog = function(func){
  var inner = function(branch){
    func(branch.value);
    if(branch.left){
      inner(branch.left);
    }
    if(branch.right){
      inner(branch.right);
    }
  }
  inner(this);
}

//Bin
/*
 * Complexity: What is the time complexity of the above functions?
 */

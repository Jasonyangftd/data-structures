

var Graph = function(name){
  var item = Object.create(Graph.prototype);
  item.storage = {};
  return item;

};

Graph.prototype.addNode = function(node){
  this.storage[node] = {};
};

Graph.prototype.contains = function(node){
  var anwser = false;
  _.each(this.storage, function(element){
    if (element = node){
      anwser = true;
    }
  });
  return anwser;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.storage[fromNode][toNode] === true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




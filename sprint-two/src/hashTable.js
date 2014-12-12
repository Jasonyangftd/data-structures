var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = [k,v];
  if (this._storage[i]===undefined) {
    this._storage[i]=[];
  }

  _.each(this._storage[i], function(thing){
    if (thing[0]===k){
      thing[1] = v;
    }
  });
  if (!_.contains(this._storage[i],[k,v])){
    this._storage[i].push([k,v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var ans = null;
  _.each(this._storage[i], function(thing){
    if (thing[0] === k){
      ans = thing[1];
    }
  });
  return ans;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j=0; j<this._storage[i].length; j++){
    if (this._storage[i][j][0] === k){
      this._storage[i][j].splice(j,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

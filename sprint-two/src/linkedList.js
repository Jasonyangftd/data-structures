var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var counter = 0;
  var start = 0;

  list.addToTail = function(value){
    list[counter+start] = value;
    list.tail = Node(value);
    list.head = Node(list[start]);
    counter++;
  };

  list.removeHead = function(){
    if (counter > 0){
      var temp = list[start];
      delete  list[start];
      counter--;
      start++;

      list.head = Node(list[start]);
      return temp;
    }
  };

  list.contains = function(target){
    var result = false;
    _.each(list, function(value){
      if (target === value){
        result = true;
      }
    });

    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

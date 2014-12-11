var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var start = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter+start] = value;
    counter++;
  };

  someInstance.dequeue = function(){

    if (counter > 0){
      var temp = storage[start];
      delete  storage[start];
      counter--;
      start++;

      console.log(storage);
      return temp;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};

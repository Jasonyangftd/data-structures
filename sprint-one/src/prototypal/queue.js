var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.start = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter+this.start] = value;
  this.counter++;
};

queueMethods.dequeue = function(){

  if (this.counter > 0){
    var temp = this.storage[this.start];
    delete  this.storage[this.start];
    this.counter--;
    this.start++;
    return temp;
  }
};

queueMethods.size = function(){
  return this.counter;
};

'use strict';
//
// const Node = require('./node');
// const linkList = require('./ll');


//define the singlyList object




//The reverse() function will use a while loop to traverse through the singly linked list and as it does it will be reversing the next pointers to equal whatever previous is.
//input: 1->2->3->4->null
//output: null<-1<-2<-3<-4
let reverse = function(){
  let next;
  let curr = this.head;
  let prev = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  this.head = prev;
  return this;
};

reverse();

//This is the remove nth node function

let removeNode = function(){
  // let curr = this.head;

  if this._length===0) return; //if list is empty, exit out.

  if (index===0){//check first node....
    this.head = curr.next;
    this._length--;
  }else {
    while (count < index-1){
      prev = curr.next;
      count++
    }
  }

}

singlyList.removeNode(3)//need to create an add function be able to add to an array/singly linked list in order to test removing from a list.

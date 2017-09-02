'use strict';

module.exports = {};
//we don't need to require these in necessarily the way we have it written, but just putting these in comments so I can find the definitions for our linkedList and nodes//
// const linkList = require('ll.js');
// const node = require('node.js');

//Logic for linked list//
//the big O runtime for this function is O(n) because we are iterating through something//
let linkedList = function() {
  let next;
  let current = this.head;
  let prev = null;

  while(current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
  return this;
};

//logic for removeNthNode(n)//
let removalList = function (n) {
  //we want to remove n//
  let next;
  let current = this.head;
  let prev = null;
  let counter = 0; //we'll set up a counter to get the length//

  while(current) { //iterate through so we can count//
    // if (current = n) //don't know why I put this here
      let next = current.next;
      counter++;
    }

  let length = counter; //set counter to length just so I can remember what it is//

  //if there's nothing in the group, then don't do anything basically -- taken from Maddy's example code
  if (length === 0) return;

  let skippy = (length - n);

  while(current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = (length - n) +1;
    }

  //A -> B -> D
  //B next is (length-n +1)
};

//another method we tried recursively
//let reverse = function (stop point) {
// iterate through with a while {}

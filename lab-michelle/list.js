'use strict';

module.exports = {};
//we don't need to require these in necessarily the way we have it written, but just putting these in comments so I can find the definitions for our linkedList and nodes//
// const linkList = require('ll.js');
// const node = require('node.js');

//Logic for linked list//
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
};

//logic for

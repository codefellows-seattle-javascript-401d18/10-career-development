'use strict';

const Node = require('./node');

// module.exports = function() {
//   this.head = null
// }

// class expression
// const SLL = class {
//   constructor() {
//     this.head = null
//   }
// }

// class definition
// class SLL {
//   constructor() {
//     this.head = null
//   }
// }

module.exports = class {
  constructor() {
    this.head = null;
  }

  prepend(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
      return node;
    }
    node.next = this.head;
    this.head = node;
    return node;
  }

  append(val) {
    let node = new Node(val);
    let lastNode;

    if(!this.head) {
      this.head = node;
      return node;
    }

    _findLastNode(this.head);
    lastNode.next = node;
    return node;

    function _findLastNode(node) {
      if(!node) return;
      lastNode = node;
      _findLastNode(node.next);
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while(current) {
      let after = current.next;
      current.next = prev;
      prev = current;
      current = after;
    }
    this.head = prev;
    return;
  }

  removeNthNode(n) {
    let prev = this.head;

    if(n === 1) {
      let current = prev.next;
      this.head = current;
      prev = null;
      return;
    }

    else {

      for(let i = 1; i < n - 1; i++) {
        prev = prev.next;
      }
      let current = prev.next;
      let after = current.next;
      prev.next = after;
      current = null;
      return;
    }
  }

  findNthNode(n) {
    let node = this.head;
    for(let i = 1; i < n; i++) {
      node = node.next;
    }
    return node;
  }

  findMiddleNode() {
    let node = this.head;
    let countNodes = 0;
    while(node) {
      node = node.next;
      countNodes++;
    }
    let middleNode = Math.floor(countNodes/2) + 1;
    node = this.head;
    for(let i = 1; i < middleNode; i++) {
      node = node.next;
    }
    return node;
  }
};

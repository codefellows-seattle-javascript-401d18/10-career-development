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

var SLL = module.exports = class {
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
    if (!this.head || !this.head.next) return this;

    let previous = null;
    let current = null;
    let next = this.head;

    while(next !== null) {
      current = next;
      next = current.next;
      current.next = previous;
      previous = current;
    }
    this.head = current;
  }
};


// var nodes = [];
// var current = this.head;
//
// while(current) {
//   nodes.push(current);
//   current = current.next;
// }
// var reversedSll = new SLL();
// reversedSll.head = nodes.pop();
// current = reversedSll.head;
//
// var node = nodes.pop();
//
// while(node) {
//   node.next = null;
//   current.next = node;
//   current = current.next;
//   node = nodes.pop();
// }
// return reversedSll;

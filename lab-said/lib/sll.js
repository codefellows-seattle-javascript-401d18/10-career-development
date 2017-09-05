'use strict';

const Node = require('./node');

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

  removeNthNode(n) {
    let prev = null;
    let curr;
    let stop = 1;

    _findNthNode(this.head);
    prev.next = curr.next;
    curr.next = null;
    return curr;

    function _findNthNode(node) {
      if(stop === n) return;
      stop++;
      prev = node;
      curr = node.next;
      _findNthNode(node.next);
    }
  }

  // note: O(n)
  reverse() {
    let current = this.head;
    let previous = null;

    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    console.log(previous);
    this.head = previous;
    return previous;
  }
};

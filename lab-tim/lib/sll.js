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

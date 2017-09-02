'use strict';

const node = require()

module.exports = class {
  constructor() {
    this.head = null;
  };

  prepend(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = node;
      return node;
    };
    node.next = this.head;
    this.head = node;
    return node;
  };

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

      
  }
};

'use strict';

const Node = require('./node');


module.exports = class {
  constructor() {
    this.head = null;
  }
  //o(1)
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
  //o(1)
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

  //o(1)
  reverse(){
    let current = this.head;
    let previous = null;

    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    // console.log(previous);
    this.head = previous;
    return previous;
  }
  //o(n)
  findMiddleNode(){
    let one, two;
    one = two = this;
    while(two && two.next && two.next.next){
      one = one.next;
      two = two.next.next;
    }
    return one;
  }

  //O(n)
  removeNthNode(node){
    if(this.head.val === node){
      this.head = this.head.next;
      return;
    } else {
      let prev = this.head;
      let curr = prev.next;
      while(curr) {
        if (curr.val === node) {
          prev.next = curr.next;
          curr = curr.next;
          return;
        } else {
          prev = curr;
          curr = curr.next;
        }
      }
    }
  }


};

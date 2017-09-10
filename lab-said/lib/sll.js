'use strict';

const Node = require('./node');

module.exports = class {
  constructor(arr) {
    this.head = null;
    if(arr) arr.forEach(val => this.append(val));
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

  //o(n)
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
    this.head = previous;
    return previous;
  }
};

// if i was asked to remove the last node

//o(n)
// removeLast() {
//
//   _setSecondToLast(this.head);
//
//   function _setSecondToLast(node) {
//     if (!node.next) return;
//     _setSecondToLast(node.next);
//   }
// }

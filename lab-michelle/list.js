'use strict';

const Node = require('./node');

module.exports = class {
  constructor (arr) {
    this.head = null;
    if (arr) arr.forEach(val => this.append(val));
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

//helper method to get last node
    function _findLastNode(node) {
      if(!node) return;
      lastNode = node;
      _findLastNode(node.next);
    }

    _findLastNode(this.head);
    lastNode.next = node;
    return node;
  }

  removeHead() {
    if(!this.head) return null;
    let temp = this.head.next;
    this.head.next = null;
    this.head = temp;
  }

  removeNthNode(n) {
    let prev = null;
    let current;
    let counter = 1;

    //helper method to find the Nth node
    _findNthNode(this.head);

    prev.next = current.next;
    current.next = null;

    return current;

    function _findNthNode(node) {
      if (counter === n) return;
      counter++;
      prev = node;
      current = node.next;
      _findNthNode(node.next);
    }
  }
  //Keeping this here for reference but I don't want to write tests for it & got code from Scott's code review
  // removeLast() {
  //   let secondToLast;
  //
  //   _setSecondToLast(this.head);
  //
  //   function _setSecondToLast(node) {
  //     if(!node.next) return;
  //     secondToLast = node.next;
  //     _setSecondToLast(node.next);
  //   }
  // }

  //the big O runtime for this function is O(n) because we are iterating through something//
  reverse() {
    if(!this.head || !this.head.next) return;

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
  }
};

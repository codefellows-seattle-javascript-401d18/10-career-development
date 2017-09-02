'use strict';

module.exports = class{
  constructor (Node){
    Node.val = this.val;
    Node.next = this.next;
  }
};

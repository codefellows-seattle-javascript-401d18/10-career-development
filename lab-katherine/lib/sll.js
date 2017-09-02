'use strict'

const Node = require('./node')

module.exports = class {
  constructor() {
    this.head = null
  }

  prepend(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = node
      return node
    }
    node.next = this.head
    this.head = node
    return node
  }

  append(val) {
    let node = new Node(val)
    let lastNode

    if(!this.head) {
      this.head = node
      return node
    }

    _findLastNode(this.head)
    lastNode.next = node
    return node

    function _findLastNode(node) {
      if(!node) return
      lastNode = node
      _findLastNode(node.next)
    }
  }
  reverse(){
    let curr = this.head
    let prev = null
    while(curr){
      let hold = curr.next
      curr.next = prev
      prev = curr
      curr = hold
    }
    this.head = prev
    return prev
  }
}

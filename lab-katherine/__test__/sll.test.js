'use strict'

const SLL = require('../lib/sll')
require('jest')

describe('Testing Singly Linked List', function() {
  let linkedList;
  describe('default properties', () => {
    beforeAll(done => {
      linkedList = new SLL()
      done()
    })
    test('should have a head property of null', () => {
      expect(linkedList).toHaveProperty('head')
      expect(linkedList.head).toBeNull()
    })
  })
  describe('#prepend', () => {
    beforeAll(done => {
      linkedList = new SLL()
      done()
    })
    describe('add a new node to the head of the list', () => {
      test('should add a new node to Head', () => {
        linkedList.prepend(2)
        expect(linkedList.head.val).toBe(2)
        expect(linkedList.head.next).toBeNull()
      })
      test('should add a second node to the list', () => {
        linkedList.prepend(3)
        expect(linkedList.head.val).toBe(3)
        expect(linkedList.head.next.val).toBe(2)
        expect(linkedList.head.next.next).toBeNull()
      })
    })
  })
  describe('#append', () => {
    beforeAll(done => {
      linkedList = new SLL()
      done()
    })
    test('add a node to the tail of the list', () => {
      linkedList.append(4)
      linkedList.append(5)
      linkedList.append(6)
      expect(linkedList.head.next.next.val).toBe(6)
    })
  })
  describe('#reverse', () => {
    beforeAll(done => {
      linkedList = new SLL()
      linkedList.prepend(4)
      linkedList.prepend(3)
      linkedList.prepend(2)
      linkedList.prepend(1)
      done()
    })
    test('have correctly ordered list', () => {
      expect(linkedList.head.val).toBe(1)
      expect(linkedList.head.next.val).toBe(2)
      expect(linkedList.head.next.next.val).toBe(3)
      expect(linkedList.head.next.next.next.val).toBe(4)
      expect(linkedList.head.next.next.next.next).toBeNull()
    })
    test('reverse this list', () => {
      linkedList.reverse()
      expect(linkedList.head.val).toBe(4)
      expect(linkedList.head.next.val).toBe(3)
      expect(linkedList.head.next.next.val).toBe(2)
      expect(linkedList.head.next.next.next.val).toBe(1)
    })
  })
  describe('#removeNthNode', () => {
    beforeAll(done => {
      linkedList = new SLL()
      linkedList.prepend(4)
      linkedList.prepend(3)
      linkedList.prepend(2)
      linkedList.prepend(1)
      done()
    })
    xtest('remove a thing', () => {
      linkedList.removeNthNode(3)
      console.log('test list', linkedList)
      expect(linkedList.head.val).toBe(1)
      expect(linkedList.head.next.val).toBe(2)
      expect(linkedList.head.next.next.val).toBe(4)
    })
    test('remove head', () => {
      linkedList.removeNthNode(1)
      console.log('test list', linkedList)
      expect(linkedList.head.val).toBe(2)
      expect(linkedList.head.next.val).toBe(3)
      expect(linkedList.head.next.next.val).toBe(4)
    })
  })
})

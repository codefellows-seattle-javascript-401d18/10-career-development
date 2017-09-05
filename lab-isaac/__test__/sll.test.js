'use strict';

const SLL = require('../lib/sll');
// require('jest');

describe('Testing Singly Linked List', function() {
  describe('default properties', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('should have a head property of null', () => {
      expect(this.sll).toHaveProperty('head');
      expect(this.sll.head).toBeNull();
    });
  });
  describe('#prepend', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    describe('add a new node to the head of the list', () => {
      test('should add a new node to Head', () => {
        this.sll.prepend(2);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next).toBeNull();
      });
      test('should add a second node to the list', () => {
        this.sll.prepend(3);
        expect(this.sll.head.val).toBe(3);
        expect(this.sll.head.next.val).toBe(2);
        expect(this.sll.head.next.next).toBeNull();
      });
    });
  });
  describe('#append', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('add a node to the tail of the list', () => {
      this.sll.append(4);
      this.sll.append(5);
      this.sll.append(6);
      expect(this.sll.head.next.next.val).toBe(6);
    });
  });
  describe('#reverse', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('reverse the sll so that tail is now head', done => {
      this.sll.append(4);
      this.sll.append(5);
      this.sll.append(6);
      this.sll.reverse();
      expect(this.sll.head.val).toBe(6);
      done();
    });
    test('and visa versa', done => {
      this.sll.reverse();
      expect(this.sll.head.val).toBe(4);
      done();
    });
    test('appending new and reversing will make new one head', done => {
      this.sll.append(99);
      this.sll.reverse();
      expect(this.sll.head.val).toBe(99);
      done();
    });
  });
  describe('#removeNthNode(n)', () => {
    beforeAll(done => {
      this.sll = new SLL();
      this.sll.append(11);
      this.sll.append(22);
      this.sll.append(33);
      this.sll.append(44);
      this.sll.append(55);
      done();
    });
    test('Remove 3rd element, 3rd now equals old 4th', done => {
      this.sll.removeNthNode(3);
      expect(this.sll.head.next.next.val).toBe(44);
      done();
    });
    test('Removing head, leaves #2 as head.', done => {
      // console.log(this.sll.head.val);
      this.sll.removeNthNode(1);
      expect(this.sll.head.val).toBe(22);
      done();
    });
    test('Removing the last one will make last the prior last', done => {
      // console.log(this.sll);
      this.sll.removeNthNode(3);
      expect(this.sll.head.next.val).toBe(44);
      done();
    });
  });
  describe('#findNthNode(n)', () => {
    beforeAll(done => {
      this.sll = new SLL();
      this.sll.prepend('THE END!!!');
      this.sll.prepend(88);
      this.sll.prepend(77);
      this.sll.prepend(66);
      this.sll.prepend(55);
      this.sll.prepend(44);
      this.sll.prepend(33);
      this.sll.prepend(22);
      this.sll.prepend(11);
      done();
    });
    test('Find 1st node', done => {
      this.sll.findNthNode(1);
      expect(this.sll.head.val).toBe(11);
      done();
    });
    test('Find 6th node', done => {
      this.sll.findNthNode(6);
      expect(this.sll.head.next.next.next.next.next.val).toBe(66);
      expect(this.sll.findNthNode(6).val).toBe(66);
      done();
    });
    test('find 9th node', done => {
      this.sll.findNthNode(9);
      expect(this.sll.findNthNode(9).val).toBe('THE END!!!');
      done();
    });
  });
  describe('#findMiddleNode', () => {
    beforeAll(done => {
      this.sll = new SLL();
      this.sll.prepend('THE END!!!');
      this.sll.prepend(88);
      this.sll.prepend(77);
      this.sll.prepend(66);
      this.sll.prepend(55);
      this.sll.prepend(44);
      this.sll.prepend(33);
      this.sll.prepend(22);
      this.sll.prepend(11);
      done();
    });
    test('Value of the middle node?', done => {
      let mid = this.sll.findMiddleNode();
      expect(mid.val).toBe(55);
      done();
    });
    test('Value of middle when even number', done => {
      this.sll.removeNthNode(9);
      let mid = this.sll.findMiddleNode();
      expect(mid.val).toBe(55);
      done();
    });
    test('Middle when only one', done => {
      this.sll = new SLL();
      this.sll.prepend('The one and only!!!');
      let mid = this.sll.findMiddleNode();
      expect(mid.val).toBe('The one and only!!!');
      done();
    });
  });
});

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
});

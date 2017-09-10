'use strict';

const SLL = require('../lib/sll');
require('jest');

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
      test('should add node with cows to list', () => {
        this.sll.prepend('cows');
        expect(this.sll.head.val).toBe('cows');
        expect(this.sll.head.next.val).toBe(3);
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
    test('Testing length', () => {
      this.sll.append(4);
      this.sll.append(5);
      this.sll.append(6);
      expect(this.sll.head.next.next.next.val).toBe(4);
    });
  });

  describe('#append with strings', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('Testing Strings', () => {
      this.sll.append('cows');
      this.sll.append('towers');
      expect(this.sll.head.val).toBe('cows');
    });
  });

  describe('#reverse', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('reverse the order of strings', () => {
      this.sll.append('cows');
      this.sll.append('keys');
      this.sll.append('towers');
      this.sll.reverse();
      expect(this.sll.head.val).toBe('towers');
      expect(this.sll.head.next.val).toBe('keys');
    });
  });
  describe('#reverse', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('reverse the order with lots', () => {
      this.sll.append(4);
      this.sll.append(5);
      this.sll.append(6);
      this.sll.append(7);
      this.sll.append(8);
      this.sll.append(9);
      this.sll.reverse();
      expect(this.sll.head.val).toBe(9);
      expect(this.sll.head.next.val).toBe(8);
      expect(this.sll.head.next.next.val).toBe(7);
      expect(this.sll.head.next.next.next.val).toBe(6);
    });
  });
});

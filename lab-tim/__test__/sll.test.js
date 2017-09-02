'use strict';

const SLL = require('../lib/sll');
require('jest');

describe('Testing Singly Linked List', function() {
  describe('default properties', () => {
    beforeEach(done => {
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
      test('should add a new node to list', () => {
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
      test('should add a third node to the list', () => {
        this.sll.prepend(4);
        expect(this.sll.head.val).toBe(4);
        expect(this.sll.head.next.val).toBe(3);
        expect(this.sll.head.next.next.val).toBe(2);
        expect(this.sll.head.next.next.next).toBeNull();
      });
    });
  });
  describe('#append', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    describe('add a new node to the tail of the list', () => {
      test('should add a new node to list', () => {
        this.sll.append(2);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next).toBeNull();
      });
      test('should add a second node to the list', () => {
        this.sll.append(3);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next.val).toBe(3);
        expect(this.sll.head.next.next).toBeNull();
      });
      test('should add a third node to the list', () => {
        this.sll.append(4);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next.val).toBe(3);
        expect(this.sll.head.next.next.val).toBe(4);
        expect(this.sll.head.next.next.next).toBeNull();
      });
    });
  });

  describe('#reverse', () => {
    beforeEach(done => {
      this.sll = new SLL();
      done();
    });
    describe('should reverse the list given valid input', () => {
      test('should reverse the list', () => {
        this.sll.append(2);
        this.sll.append(4);
        this.sll.append(6);
        this.sll.reverse();
        expect(this.sll.head.val).toBe(6);
        expect(this.sll.head.next.val).toBe(4);
        expect(this.sll.head.next.next.val).toBe(2);
      });
      test('should return null because the list is empty', () => {
        this.sll.reverse();
        expect(this.sll.head).toBeNull();
      });
      test('should return the list unaltered because it only has one node', () => {
        this.sll.append(5);
        this.sll.reverse();
        expect(this.sll.head.val).toBe(5);
      });
    });
  });

  describe('#removeNthNode', () => {
    beforeEach(done => {
      this.sll = new SLL();
      done();
    });
    describe('should removed node from list given valid input', () => {
      test('should remove 2nd node from list', () => {
        this.sll.append(2);
        this.sll.append(4);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next.val).toBe(4);
        expect(this.sll.head.next.next).toBeNull();
        this.sll.removeNthNode(1);
        expect(this.sll.head.val).toBe(2);
        expect(this.sll.head.next).toBeNull();
      });
      test('should remove the 1st node from the list', () => {
        this.sll.removeNthNode(1);
        expect(this.sll.head).toBeNull();
      });
      test('should return null because the list is empty', () => {
        this.sll.removeNthNode(1);
        expect(this.sll.head).toBeNull();
      });
    });
  });
});

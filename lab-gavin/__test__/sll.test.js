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
      test('should add node with monkeys to list', () => {
        this.sll.prepend('monkeys');
        expect(this.sll.head.val).toBe('monkeys');
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
      this.sll.append('monkeys');
      this.sll.append('donkeys');
      this.sll.append('spidermonkeys');
      expect(this.sll.head.val).toBe('monkeys');
    });
  });

  describe('#reverse', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('reverse the order', () => {
      this.sll.append(4);
      this.sll.append(5);
      this.sll.append(6);
      this.sll.reverse();
      expect(this.sll.head.val).toBe(6);
      expect(this.sll.head.next.val).toBe(5);
    });
  });
  describe('#reverse', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('reverse the order of strings', () => {
      this.sll.append('monkeys');
      this.sll.append('donkeys');
      this.sll.append('wingedbats');
      this.sll.reverse();
      expect(this.sll.head.val).toBe('wingedbats');
      expect(this.sll.head.next.val).toBe('donkeys');
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

  describe('#removeNthNode', () => {
    beforeAll(done => {
      this.sll = new SLL();
      this.sll.append(1);
      this.sll.append(2);
      this.sll.append(3);
      this.sll.append(4);
      done();
    });
    test('remove a node', () => {
      this.sll.removeNthNode(3);

      expect(this.sll.head.val).toBe(1);
      expect(this.sll.head.next.val).toBe(2);
      expect(this.sll.head.next.next.val).toBe(4);
    });
    test('remove another node after first deletion based on updated list.', () => {
      this.sll.removeNthNode(1);
      expect(this.sll.head.val).toBe(2);
      expect(this.sll.head.next.val).toBe(4);
      expect(this.sll.head.next.next).toBe(null);
    });
  });
  describe('#removeNthNode with strings!', () => {
    beforeAll(done => {
      this.sll = new SLL();
      this.sll.append('Monkeys');
      this.sll.append('Donkeys');
      this.sll.append('Zebras');
      this.sll.append('Dragons');
      done();
    });
    test('remove a node with string', () => {
      this.sll.removeNthNode('Zebras');

      expect(this.sll.head.val).toBe('Monkeys');
      expect(this.sll.head.next.val).toBe('Donkeys');
      expect(this.sll.head.next.next.val).toBe('Dragons');
    });
    test('remove another node after first deletion based on updated list.', () => {
      this.sll.removeNthNode('Monkeys');
      expect(this.sll.head.val).toBe('Donkeys');
      expect(this.sll.head.next.val).toBe('Dragons');
      expect(this.sll.head.next.next).toBe(null);
    });
  });
});

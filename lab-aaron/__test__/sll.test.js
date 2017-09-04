'use strict';

const SLL = require('../lib/sll');
require('jest');

describe('Testing the Singly LInked List', function() {
  describe('default properties', () => {
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });

    test('should have the head property of null', () => {
      expect(this.sll).toHaveProperty('head');
      expect(this.sll.head).toBeNull();
    });
    describe('#prepend', () => {
      beforeAll(done => {
        this.all = new SLL();
        done();
      });

      describe('add a new node to the head of the list', () => {
        test('should add new node to the head', () => {
          this.sll.prepend(2);
          expect(this.sll.head.val).toBe(2);
          expect(this.sll.head.next).toBeNull();
        });

        test('should add a second node to the list', () => {
          this.sll.prepend(3);
          expect(this.sll.head.val).toBe(3);
          expect(this.sll.head.next.val).toBe(2);
          expect(this.sll.head.next.nexy).toBeNull();
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
        this.all.append(6);
        expect(this.sll.head.next.val).toBe(6);
      });
    });
  });
});

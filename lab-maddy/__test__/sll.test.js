'use strict';

const SLL = require('../lib/sll');
require('jest');

describe('Testing Singly Linked List', function(){
  describe('default properties', ()=>{
    beforeAll(done => {
      this.sll = new SLL();
      done();
    });
    test('should have a head property of null', ()=> {
      expect(this.sll).toHaveProperty('head');
      expect(this.sll.head).toBeNull();
    });
  });
  describe('');
});

describe('#reverse', () => { //still in the process of writing this one!!!
    beforeAll(done => {
      // this.sll = new SLL()
      done()
    })
    describe('reverse the pointers in the linked list', () => {
      test('should add a new node to Head', () => {
        this.sll.prepend(2)
        expect(this.sll.head.val).toBe(2)
        expect(this.sll.head.next).toBeNull()
      })
      test('should add a second node to the list', () => {
        this.sll.prepend(3)
        expect(this.sll.head.val).toBe(3)
        expect(this.sll.head.next.val).toBe(2)
        expect(this.sll.head.next.next).toBeNull()
      })
    })
  })
  describe('#append', () => {
    beforeAll(done => {
      this.sll = new SLL()
      done()
    })
    test('add a node to the tail of the list', () => {
      this.sll.append(4)
      this.sll.append(5)
      this.sll.append(6)
      expect(this.sll.head.next.next.val).toBe(6)
    })
  })
})

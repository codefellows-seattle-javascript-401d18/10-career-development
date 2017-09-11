'use strict';
//Set tests for each method that you've written - reverse and remove Nth
const List = require('../list');
require('jest');

describe('Testing singly linked list', function() {
  describe('Testing default properties', () => {
    beforeAll(done => {
      this.list = new List();
      done();
    });
    test('should have a head', ()=> {
      expect(this.list).toHaveProperty('head');
    });
  });

  describe('Testing prepend', () => {
    test('prepend to head with 9 should equal 9', () => {
      this.list.prepend(9);
      expect(this.list.head.val).toEqual(9);
    });
    test('If a number is prepended to head, head should not be null', () => {
      this.list.prepend(9);
      expect(this.list.head).not.toBe(null);
    });
    test('Prepend to head with null should equal null', () => {
      this.list.prepend(null);
      expect(this.list.head.val).toBe(null);
    });
  });
  describe('Testing append', () => {
    beforeAll(done => {
      this.list = new List();
      this.list.append(1);
      done();
    });
    test('append to tail, head should still be 1', () => {
      this.list.append(9);
      expect(this.list.head.val).toEqual(1);
    });
    test('If a number is appended to list, head should not be null', () => {
      this.list.append(9);
      expect(this.list.head).not.toBe(null);
    });
    test('Append list and then reverse, head should be tail', () => {
      this.list.append(4);
      this.list.reverse();
      expect(this.list.head.val).toBe(4);
    });
  });
  describe('Testing reverse', () => {
    beforeAll(done => {
      this.list = new List();
      done();
    });
    test('list should be 123', ()=>{
      this.list.append(1);
      this.list.append(2);
      this.list.append(3);
      this.list.prepend(9);
      expect(this.list.head.val).toEqual(9);
    });
    test('list should now reverse', ()=> {
      this.list.reverse();
      expect(this.list.head.val).toEqual(3);
    });
    test('list should reverse again', () => {
      this.list.reverse();
      expect(this.list.head.val).toEqual(9);
    });
    test('list should not include a nonsensical value', () => {
      expect(this.list.head.val).not.toEqual(0);
    });
  });
  describe('Testing remove Nth node', () => {
    beforeAll(done => {
      this.list = new List();
      this.list.append(1);
      this.list.append(2);
      this.list.append('george');
      done();
    });
    test('Removing second node', () => {
      this.list.removeNthNode(2);
      expect(this.list).not.toContain(2);
    });
    test('Removing third node', () => {
      this.list.append('seinfeld');
      this.list.append('elaine');
      this.list.removeNthNode(3);
      expect(this.list).not.toContain('seinfeld');
    });
    test('Removing the tail should work', () => {
      this.list = new List();
      this.list.append(1);
      this.list.append(2);
      this.list.append(4);
      this.list.removeNthNode(3);
      expect(this.list).not.toContain(4);
    });
  });
});

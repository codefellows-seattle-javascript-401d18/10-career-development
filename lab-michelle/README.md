# Linked Lists

## How this works
We create a linkList class using the constructor syntax in ES6
```
let linkList = class {
  constructor () {
    this.head = null;
  }
};
```

We create a way to make nodes via class using the constructor syntax available in ES6
```
let node = class {
  constructor () {
    this.val = value;
    this.next = next;
  }
};
```

Then we create a linkedList function, which contains our linkedList
```
let linkedList = function() {
  //we are creating a linkedList function//

  let next;
  //we declare a variable for a "next"//

  let current = this.head;
  //this refers to the actual linked list itself. this.head is the beginning of the node list. We set this.head to be the head of the list//

  let prev = null;
  //because the beginning of the list at this point is the head, then there is nothing previous to the head, therefore the value is null//

  while(current) {
    //we create a while loop so we can iterate through the group of nodes. Nodes aren't in an array, so we have to come up with a way to move through them.//

    next = current.next;
    //We redefine the value of next to be current.next, basically just moving the value of next to that over the next node over from current. This is how we're going to iterate through the group//

    current.next = prev;
    //current.next in this context is the next thing of the _head_, meaning we set the "arrow" pointing to the next actual node changes to the value of whatever next is (which is prev, which is null, effectively "switching" the direction of our arrow).//

    prev = current;
    //we redefine the value of previous to be that of current//

    current = next;
    //we redefine the value of current to that of next//
  }

  this.head = prev;
  //we have to declare our starting value, which will be null, which is what we set prev to at the top of the file//
};
```
## A sort of visual

1, 2, 3, 4
In the first iteration of the loop:
current = 1
next = 2
current.next = null
prev = 1
current = 2

Now we run through again:
current = 2
next = 3
current.next = 1
prev = 2
current = 3

Now run through again:
current = 3
next = 4
current.next = 2
prev = 3
current = 4

Now run through again:
current = 4
next = null
current.next = 3
prev = 4
current = null so we break out of the loop

## A Note on Nodes
Nodes aren't like arrays, so you can't use array methods on them. Also, there is no particular order with regard to nodes - they kind of exist out there in space.

## Resources I Used:
https://leetcode.com/problems/remove-nth-node-from-end-of-list/solution/ - I wanted to check that my idea for how to solve this on a conceptual level was correct (aka, redirect the arrows and drop one out).
https://stackoverflow.com/questions/39283662/remove-node-from-singly-linked-list - Also referred to this while working with Maddy on Friday night (helped me get the n === 0)

'use strict';

const SLL = require('./lib/sll');

this.sll = new SLL();

console.log(this.sll);

this.sll.prepend(3);
this.sll.prepend(2);
this.sll.prepend(1);
console.log(this.sll.head);
this.sll.append(4);
this.sll.append(5);
this.sll.append(6);
console.log(this.sll.head.next.next.next);
this.sll.reverse();
console.log(this.sll.head);
console.log(this.sll.head.next.next.next);

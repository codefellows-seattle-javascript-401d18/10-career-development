# Singly Link List lab

#### Contributor: Isaac Heist

This program is a from Code Fellows 401 JS lab for Career Development. The lab encompasses working with the Linked List data structure.  This lab creates prototype methods for working with Singly Linked Lists.


## Protoypes:

* ```prepend(val)``` - this methods adds a node to the existing list at the start of the list making it the head. This requires O(1) time because it is immediate look up and requires no traversing through the list.

* ```append(val)``` - this method adds a node to the existing list at the end of the list.  This requires O(n) time since is has to go through the entire list to find the end.

* ```reverse()``` - this method takes an existing list and reverses it so that the last item of the list is now the head and the head is now the last item of the list. This requires O(n) time to complete.

* ```removeNthNode(n)``` - this method removes or deletes the nth node from an existing list.  This requires O(n) as it is required to traverse through the list to find the nth node.

* ```findNthNode(n)``` - this method finds the nth node in a list and returns it. This requires O(n) as it is required to traverse through the list to find the nth node.

* ```findMiddleNode()``` - this method finds the middle node in a list.  If the list contains an even number of nodes, so there is two nodes that occupy the middle equally, it will return the later or the second of the two nodes. Example: - list contains 8 nodes. Nodes 4 and 5 will occupy the middle.  This method will return the 5th Node. This requires O(n) as it is required to traverse through the list to find the nth node.

## Requirements:

This app was built to run in Node.js.  You must have Node installed to run this application.

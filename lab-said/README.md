## Configuration  
* created the following files:  
  * `README.md`  
  * `.gitignore`  
  * `.eslintrc.json`  
  * `.eslintignore`  
  * `.package.json`  
  * index.js  

* created the following directories and sub files:  
  * __test__  
    * sll.test.js  
  * lib  
    * dll.js  
    * node.js  
    * sll.js  

## What this project does:      
    * This project implements `reverse()` as a method on the Linked List prototype; from your whiteboard exercise.  
    * In this project I complete the Linked List data structure by adding a `removeNthNode(n)` method.  
    * Within each function, I will note the Big-O runtime.  

    1. Reverse():  
    * The reverse function will use a while loop to traverse through the singly linked list and as it does it will reverse the next pointers.  
      - Input: 1->2->3->4->null  
      - Output: null<-1<-2<-3<-4  

    2. append(val)  
    * his will append a new node at the end of the list of nodes  

    3. prepend(val)  
    * This will append a new node at the beginning of the list of nodes

    2. Remove nth Node:  
    * Any resources that helped me complete this assignment:  
      - This stack overflow forum question about removing a node from the middle of a linked list:  
      https://stackoverflow.com/questions/39283662/remove-node-from-singly-linked-list

      - This tutorial was incredible for visualizing and understanding traversing through linked lists:  
      https://www.youtube.com/watch?v=TSDl7sRxWdU&index=1&list=LLOht0sOlAclPCSApbUywH9w  

    * How another dev could 'get started' with this app:  
      - Fork this repo.  
      - Clone your fork.  
      - Create a branch from your fork.  


# Packages and commands to remember:
  - In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js" -  
    - npm install (for node modules) -  
    - npm install httpie -  
    - npm install superagent - DONE  
    - npm install uuid -  
    - npm install -D jest -  
    - npm test  
    - node server.js or just nodemon  
    - rs (restart, if needed)  
    - run start: watch -  
    - npm run start: debug -  
    - npm run debugger -  

# Collaborators:
Tim, Gavin and Madi with my README file!.  

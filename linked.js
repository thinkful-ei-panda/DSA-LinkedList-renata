/* eslint-disable no-extra-semi */
/* eslint-disable no-console */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
  
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  
  insertBefore(newItem, nextItem) {
    let tempNode = this.head;

    while (tempNode.next !== null) {
      if (tempNode.next.value == nextItem) {
        let n = new _Node(newItem); 
        n.next = tempNode.next; 
        tempNode.next = n;
        return;
      }
      tempNode = tempNode.next;
    }
  }
  
  insertAfter(prevItem, newItem) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value == prevItem) {
        let n = new _Node(newItem);
        n.next = tempNode.next;
        tempNode.next = n;
        return;
      }
      tempNode = tempNode.next;
    }
  }
  
  insertAt(newItem, position) {
    let tempNode = this.head;
    let n = new _Node(newItem);
  
    if (tempNode == null && position !== 0) {
      return;
    } else if 
    (tempNode == null && position == 0) {
      insertFirst(newItem);
    } else if 
    (tempNode !== null && position == 0) {
      n.next = this.head;
      this.head = n;
      return;
    }
  
    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < position) {
      previous = current;
      current = current.next;
      if (current == null) {
        break;
      }
      i++;
    }
    n.next = current;
    previous.next = n;
  }
  
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
  
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  
  reverseRecur() {
    if (!this.head) {
      return;
    }
  
    function reverseRE(current) {
  
      if (!current.next) {
        return current;
      } 
      var head = reverseRE(current.next);
  
      var nextNode = current.next;
      nextNode.next = current;
      current.next = null;
      return head;
    }
    this.head = reverseRE(this.head);
  };
  
  logNthFromLast(head, n) {
    let main_ptr = head;
    let ref_ptr = head;
    let count = 0;
    if (head !== null) {
      while (count < n) {
        if (ref_ptr === null) {
          console.log('Number is greater than items on list.');
          return;
        }
        ref_ptr = ref_ptr.next;
        count += 1;
      }
    }
  
    while (ref_ptr !== null) {
      main_ptr = main_ptr.next;
      ref_ptr = ref_ptr.next;
    }
    return main_ptr;
  }
  
  middleOfTheList(head) {
    let slow_ptr = head;
    let fast_ptr = head;
    if (head !== null) {
      while (fast_ptr !== null && fast_ptr.next != null) {
        fast_ptr = fast_ptr.next.next;
        slow_ptr = slow_ptr.next;
      }
      console.log('The middle pointer is: ', slow_ptr);
    }
  }
  
  hasCycle(head) {
    if (head === null) {
      return false;
    }
    let slow_ptr = head;
    let fast_ptr = head.next; 
    while (fast_ptr !== null && fast_ptr.next !== null && slow_ptr !== null) {
      if (fast_ptr == slow_ptr) {
        return true;
      }
      fast_ptr = fast_ptr.next.next;
      slow_ptr = slow_ptr.next;
    }
    return false;
  }
}
  
function main(arr) {
  const SLL = new LinkedList;
  for (let i = 0; i < arr.length; i++) {
    SLL.insertLast(arr[i]);
  }
  
  getSize(SLL);
  isEmpty(SLL);
  findPrevious('Starbuck', SLL);
  findLast(SLL);
  WhatDoesThisProgramDo(SLL);
  
  SLL.reverseRecur();
  SLL.logNthFromLast(SLL.head, 1);
  display(SLL);
  
  SLL.middleOfTheList(SLL.head);
  
  SLL.insertFirst('Tauhida');
  SLL.remove('Husker');
  SLL.remove('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt('Kat', '3');
  
  console.log('Boomer: ', SLL.find('Boomer'));
  console.log('Apollo: ', SLL.find('Apollo'));
  console.log('Husker: ', SLL.find('Husker'));
  console.log(SLL.find('Apollo'));
  console.log('Athena:', SLL.find('Athena'));
  console.log('Hotdog: ', SLL.find('Hotdog'));
  console.log('Helo: ', SLL.find('Helo'));
  console.log('Kat: ', SLL.find('Kat'));
  console.log(SLL.find('Tauhida'));
  
  return SLL;
}
  
main(['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck']);
  
  
function display(linkedList) {
  let tempNode = linkedList.head;
  while (tempNode !== null) {
    console.log(tempNode);
    tempNode = tempNode.next;
  }
}
  
function getSize(linkedList) {
  let tempNode = linkedList.head;
  let i = 0;
  while (tempNode !== null) {
    i += 1;
    tempNode = tempNode.next;
  }
  console.log('The length of your linkedList is: ', i);
}
  
function isEmpty(linkedList) {
  if (linkedList.head === null) {
    console.log('Empty');
  } else {
    console.log('Not Empty');
  }
}
  
function findPrevious(item, linkedList) {
  let tempNode = linkedList.head;
  if (tempNode.value === item) {
    console.log('prevNode: Null');
  }
  while (tempNode.next !== null) {
    if (tempNode.next.value === item) {
      console.log('prevNode: ', tempNode);
    }
    tempNode = tempNode.next;
  }
}
  
function findLast(linkedList) {
  let tempNode = linkedList.head;
  if (tempNode === null) {
    console.log('Unpopulated list');
  }
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  console.log('Last Item: ', tempNode.value);
}

  
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
  

const CycleList = new LinkedList;
CycleList.insertLast('A');
CycleList.insertLast('B');
CycleList.insertLast('C');
CycleList.insertLast('D');
CycleList.insertLast('E');
CycleList.insertLast('F');
CycleList.insertLast('G');
CycleList.find('E').next = CycleList.find('A');
  
CycleList.hasCycle(CycleList.head);

  
const sortList = new LinkedList();
  
  
sortList.insertLast(3);
sortList.insertLast(8);
sortList.insertLast(10);
sortList.insertLast(5);
sortList.insertLast(15);
sortList.insertLast(7);
sortList.insertLast(1);
  
  

function sortLinkedList(linkedList) {
  let currentNode = linkedList.head;
  let head = linkedList.head;
  let storeNode;
  let shouldSort = true;
   

  while (shouldSort) {
    shouldSort = false;
    
    while (currentNode.next !== null) {
      if (currentNode.value > currentNode.next.value) {
        storeNode = currentNode.value;
        currentNode.value = currentNode.next.value;
        currentNode.next.value = storeNode;
        shouldSort = true;
      }
      currentNode = currentNode.next;
      
    }
    if(!currentNode.next) {
      currentNode = linkedList.head;
    }
  }
}
  
sortLinkedList(sortList);
display(sortList);

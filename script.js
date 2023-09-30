class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add a new node containing value to the start of the list
  prepend(val) {
    this.head = new Node(val, this.head);
  }

  // add a new node containing val to the end of the list
  append(val) {
    let node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new Node(val);
  }

  //return the total number of nodes in the list
  listLength() {
    if (this.head == null) return 0;
    let node = this.head;
    let num = 1;
    while (node.next != null) {
      num++;
      node = node.next;
    }
    return num;
  }

  // return the first node in the list
  headNode() {
    return this.head;
  }

  // return the last node in the list
  tailNode() {
    let node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }

  // return the node at the given index
  atIndex(n) {
    if (n === 0) return this.head;
    let node = this.head;
    for (let i = 1; i <= n; i++) {
      //   console.log(node);
      node = node.next;
      if (i === n) return node;
    }
  }

  // remove the last element from the list
  pop() {
    let node = this.head;
    while (node.next.next != null) {
      node = node.next;
    }
    node.next = null;
  }

  // returns true if the passed value is in the list and otherwise return false
  contains(val) {
    let node = this.head;
    while (node.next != null) {
      if (node.value === val) return true;
      node = node.next;
    }
    return node.value === val;
  }

  //return the index of the node containing value, or null if not found
  findIndex(val) {
    let node = this.head;
    let index = 0;
    while (node.next != null) {
      if (node.value === val) return index;
      node = node.next;
      index++;
    }
    return node.value === val ? index : null;
  }

  // print all objects as strings
  toString() {
    let str = "";
    let node = this.head;
    while (node.next != null) {
      str += `(${node.value}) -> `;
      node = node.next;
    }
    str += `(${node.value})`;
    return str;
  }

  // insert a new node with the provided value at the given index
  insertAt(val, index) {
    if (index === 0) this.head = new Node(val, this.head);
    let node = this.head;
    let i = 0;
    while (node.next != null) {
      if (i + 1 === index) {
        node.next = new Node(val, node.next);
      }
      node = node.next;
      i++;
    }
  }

  // remove the node at the given index
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    }
    let node = this.head;
    let i = 0;
    while (node.next != null) {
      if (i + 1 === index) {
        console.log(node);
        node.next = node.next.next;
      }
      node = node.next;
      i++;
    }
  }
}

const testList = new LinkedList();
testList.prepend("three");
testList.prepend("two");
testList.prepend("one");
testList.prepend("zero");
testList.append("four");
testList.append("five");

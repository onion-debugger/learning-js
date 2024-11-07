class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const middleOfLinkedList = (head) => {
  // pointers
  let prev = head;
  let current = head;

  while (current && current.next) {
    current = current.next.next;
    prev = prev.next;
  }

  return prev.val;
};

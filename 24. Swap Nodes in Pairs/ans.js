function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function swapPairs(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current && current.next) {
    const next = current.next;
    current.next = next.next;
    next.next = current;
    prev.next = next;

    prev = current;
    current = current.next;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = null;
  let tail = null;

  for (let val of arr) {
    const newNode = new ListNode(val);

    if (!head) {
      head = newNode;
      tail = head;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

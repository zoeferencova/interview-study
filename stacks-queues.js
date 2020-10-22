// Building a stack from scratch using linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            newNode.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        this.top = this.top.next;
        
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.length--;
        return this;
    }
}


// Building a stack from scratch using an array

class ArrayStack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}


// Building a queue from scratch using linked list

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }
        
        this.first = this.first.next;

        this.length--;
        return this;
    }
}


// Implement a queue using stacks
class NewQueue  {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        const length = this.stack1.length;
        for (let i = 0; i < length; i++) {
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.push(value);
        return this;
    }

    dequeue() {
        const length = this.stack2.length;

        for (let i = 0; i < length; i++) {
            this.stack1.push(this.stack2.pop())
        }

        this.stack1.pop();
        return this;
    }

    peek() {
        if (this.stack2.length > 0) {
            return this.stack2[0]
        }

        return this.stack1[this.stack1.length - 1]
    }
}

// Most recently enqueued => stack 2 and forwards
// Most recently dequeued => stack 1 and not backwards

// When queueing, only pushes to stack 2 if stack 1 has length
// Easy to add to the end

// When dequeueing, only pushes to stack 1 if stack 2 has length
// Easy to pop off last element which is first in queue

const myQueue = new NewQueue();
myQueue.enqueue("a")
myQueue.enqueue("b")
myQueue.enqueue("c")
myQueue.enqueue("d")
myQueue.enqueue("e")
myQueue.enqueue("f")
console.log(myQueue);

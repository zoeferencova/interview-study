// Building a linked list from scratch

// General structure
let exampleLinkedList = {
    head: {
        value: 10,
        // Pointer
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        } 
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // Constructor creates first node
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        for (let i=0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insert(index, value) {
        if (index > this.length || index < 0) {
            return "Invalid index"
        }

        if (index === 0) {
            return this.prepend(value);
        }

        if (index === this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;

        newNode.next = follower;
        leader.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index > this.length || index < 0) {
            return "Invalid index"
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;

            if (leader.next === null) {
                this.tail = leader;
            }
        }

        this.length--;
        return this;
    }
}

class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    append(value) {
        const newNode = new DNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new DNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        if (index < this.length/2) {
            let currentNode = this.head;
            for (let i=0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        } else {
            let currentNode = this.tail;
            for (let i=this.length-1; i > index; i--) {
                currentNode = currentNode.prev;
            }
            return currentNode;
        }
    }

    insert(index, value) {
        if (index > this.length || index < 0) {
            return "Invalid index"
        }

        if (index === 0) {
            return this.prepend(value);
        }

        if (index === this.length) {
            return this.append(value);
        }

        const newNode = new DNode(value);

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        
        this.length++;
        return this;
    }

    remove(index) {
        if (index > this.length || index < 0) {
            return "Invalid index"
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            const leader = this.traverseToIndex(index - 1);
            const unwantedNode = leader.next;
            const follower = unwantedNode.next;
            
            if (follower !== null) {
                leader.next = follower;
                follower.prev = leader;
            } else {
                leader.next = null;
                this.tail = leader;
            }
        }

        this.length--;
        return this;
    }
}


// Interview Question

// Reverse a singly linked list

class QuestionList extends LinkedList {
    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            // adding second onto beginning of "first" loop
            second.next = first;
            // simply switching what the variables are in reference to
            // so that the chain with new node becomes first
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this;
    }
} 

// first   second  temp
// 10      11      12      13      14

// first   second  temp
// 11      12      13      14
// |
// 10

// first   second  temp
// 12      13      14      
// |
// 11
// |
// 10
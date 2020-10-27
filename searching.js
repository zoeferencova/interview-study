// Breadth First Search + Depth First Search

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                } else {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (currentNode.value === value) {
                return currentNode
            } 
        }
        return false;
    }

    remove(value) {
        let currentParent = this.root;
        let node;
        let side;

        while (currentParent.left.value !== value && currentParent.right.value !== value) {
            if (value > currentParent.value) {
                currentParent = currentParent.right;
            } else if (value < currentParent.value) {
                currentParent = currentParent.left;
            }
        }

        if (currentParent.left.value === value) {
            node = currentParent.left;
            side = "left";
        } else if (currentParent.right.value === value) {
            node = currentParent.right;
            side = "right";
        } 

        if (node === false) {
            return "Node doesn't exist";
        }

        let currentNode = node;

        if (currentNode.left === null && currentNode.right === null) {
            currentParent[side] = null;
        } else {
            while (currentNode.right !== null) {
                currentNode = currentNode.right;
            }
    
            if (!currentNode.left) {
                currentNode.left = node.left;
                currentParent[side] = currentNode;
            } else {
                currentNode.left = node.left;
                currentNode.right = node.right;
                currentParent[side] = currentNode.left;
    
            }
        }

        

        return this;
    }

    removeSolution(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
    }

    breadthFirstSearch() {
        let currentNode = this.root;

        // Answer
        let list = [];

        // To keep track of level that we are at
        let queue = [];

        queue.push(currentNode);

        while(queue.length > 0) {
            // Returning and removing first item in queue
            currentNode = queue.shift();
            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
    }

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value);
        
        if (currentNode.left) {
            queue.push(currentNode.left)
        }

        if (currentNode.right) {
            queue.push(currentNode.right)
        }

        return this.breadthFirstSearchRecursive(queue, list)
    }

    DFSInorder() {
        return traverseInorder(this.root, [])
    }

    DFSPostorder() {
        return traversePostorder(this.root, [])
    }

    DFSPreorder() {
        return traversePreorder(this.root, [])
    }
}

function traverseInorder(node, list) {
    if (node.left) {
        traverseInorder(node.left, list)
    }

    list.push(node.value);

    if (node.right) {
        traverseInorder(node.right, list)
    }

    return list;
}

function traversePreorder(node, list) {
    list.push(node.value);

    if (node.left) {
        traversePreorder(node.left, list)
    }

    if (node.right) {
        traversePreorder(node.right, list)
    }

    return list;
}

function traversePostorder(node, list) {
    if (node.left) {
        traversePostorder(node.left, list)
    }

    if (node.right) {
        traversePostorder(node.right, list)
    }

    list.push(node.value);

    return list;
}

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.breadthFirstSearchRecursive([tree.root], []))

console.log(tree.DFSPostorder())
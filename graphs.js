// Edge list - shows connection between vertices
const edgeList = [[0, 2], [2, 3], [2, 1], [1,3]];

// Adjacent list - lists which nodes each index node is connected to
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent matrix - use indices for both main array and sub array
// to determine connections
// 0 is connected to 2
// 1 is connected to 2 and 3
// 2 is connected to 0, 1, and 3
// 3 is connected to 1 and 2
const adjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

// Building a graph from scratch

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
        // adjacentList = { 0: [1, 2], 1: [2, 3] }
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

console.log(myGraph.showConnections()); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5
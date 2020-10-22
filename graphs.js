// Edge list - shows connection between vertices
const graph = [[0, 2], [2, 3], [2, 1], [1,3]];

// Adjacent list - lists which nodes each index node is connected to
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent matrix - use indices for both main array and sub array
// to determine connections
// 0 is connected to 2
// 1 is connected to 2 and 3
// 2 is connected to 0, 1, and 3
// 3 is connected to 1 and 2
const graph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {

    }

    addEdge(node1, node2) {

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
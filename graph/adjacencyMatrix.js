// graph repersentation of adjecency matrix

class Graph{
    constructor(numNodes){
        this.matrix = [];
        for(let i = 0 ; i < numNodes; i++){
            this.matrix.push(new Array(numNodes).fill(0));
        }
    }

    addEdge(fromNode,toNode){
        this.matrix[fromNode][toNode] = 1;
        this.matrix[toNode][fromNode] = 1;
    } 

    removeEdge(fromNode,toNode){
        this.matrix[fromNode][toNode] = 0;
        this.matrix[toNode][fromNode] = 0;
    }

    isEdge(fromNode,toNode){
        return this.matrix[fromNode][toNode] === 1;
    }
}
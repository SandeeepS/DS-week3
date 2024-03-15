//implimentation of graph using adacency list

class Graph{
    constructor(){
        this.list = {}
    }

    addNode(node){
        this.list[node] = [];
    }

    addEdge(fromNode,toNode){
        this.list[fromNode].push(toNode);
        this.list[toNode].push(fromNode);
    }

    removeEdge(fromNode,toNode){
        this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode);
        this.list[toNode] = this.list[toNode].filter((node)=> node !== fromNode);
    }

    isEdge(fromNode,toNode){
        return this.list[fromNode].includes(toNode);
    }

    bfs(startNode){
        const visited = {};
        const queue = [startNode];
        visited[startNode] = true;

        while(queue.length > 0){
            const currentNode = queue.shift();
            console.log(currentNode);

            for(const neighbor of this.list[currentNode]){
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true
                }
            }
        }
    }

    dfs(startNode) {
        const visited = {};
        this.dfsUtil(startNode, visited);
    }

    dfsUtil(node, visited) {
        visited[node] = true;
        console.log(node);

        for (const neighbor of this.list[node]) {
            if (!visited[neighbor]) {
                this.dfsUtil(neighbor, visited);
            }
        }
    }
}

let graph = new Graph();
graph.addNode(5);
graph.addNode(10);
graph.addNode(25);
graph.addNode(30);
graph.addNode(35);

graph.addEdge(5,10);
graph.addEdge(10,25);
graph.addEdge(25,10);
graph.addEdge(25,30);
graph.addEdge(30,35);


graph.bfs(5);
console.log("---------------------");
graph.dfs(5)

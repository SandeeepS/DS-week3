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

    bfs(startNode){
        const visited = new Array(this.matrix.length).fill(false);
        const queue = [startNode];
        visited[startNode] = true;

        while(queue.length > 0){
            const currentNode = queue.shift();
            console.log(currentNode);

            for(let i = 0 ; i < this.matrix.length; i++){
                if(this.matrix[currentNode][i] === 1 && !visited[i]){
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    dfs(startNode){
        const visited = new Array(this.matrix.length).fill(false);
        this.dfsUtil(startNode,visited);
    }

    dfsUtil(node,visited){
        visited[node] = true;
        console.log(node);

        for(let i = 0 ; i < this.matrix.length; i++){
            if(this.matrix[node][i] === 1 && !visited[i]){
                this.dfsUtil(i,visited);
            }
        }
    }

    printGraph() {
        for (let i = 0; i < this.matrix.length; i++) {
            let row = '';
            for (let j = 0; j < this.matrix[i].length; j++) {
                row += this.matrix[i][j] + ' ';
            }
            console.log(row);
        }
    }
    

    
}

const graph = new Graph(5);
graph.addEdge(0,1);
graph.addEdge(1,2);
graph.addEdge(2,3);
graph.addEdge(3,4);

graph.bfs(3);
console.log("-----------------------------");
graph.dfs(3)
console.log("printed graph");
graph.printGraph();

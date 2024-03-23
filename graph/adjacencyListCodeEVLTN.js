//implimentaion of graph using adjacency list by code evolution

class Graph{
    constructor(){
        this.list = {}
    }

    addVertx(vertx){
        if(!this.list[vertx]){
            this.list[vertx] = new Set();
        }
    }

    addEdge(vertx1, vertx2){
        if(!this.list[vertx1]){
            this.addVertx(vertx1);
        }

        if(!this.list[vertx2]){
            this.addVertx(vertx2);
        }

        this.list[vertx1].add(vertx2);
        this.list[vertx2].add(vertx1);

    }

    removeEdge(vertx1,vertx2){
        this.list[vertx1].delete(vertx2);
        this.list[vertx2].delete(vertx1);
    }

    hasEdge(vertx1 , vertx2){
        return this.list[vertx1].has(vertx2) && this.list[vertx2].has(vertx1);
    }

    removeVertx(vertx){
        if(!this.list[vertx]){
            return 
        }

        for(let selectedvertx of this.list[vertx]){
            this.removeEdge(vertx,selectedvertx);

        }

        delete this.list[vertx];
    }

    display(){
        for(let vertx in this.list){
            console.log( vertx + " -> " + [...this.list[vertx]]);
        }
    }


}

let graph = new Graph();

graph.addVertx("A");
graph.addVertx("B");
graph.addVertx("C");

graph.addEdge("A","B");
graph.addEdge("B","C");
graph.display()
graph.removeVertx("B");
graph.display();
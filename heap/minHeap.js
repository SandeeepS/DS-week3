//implimentation of min heap

class MinHeap{
    constructor(){
       this.arr = new Array;
       this.heapSize = 0;
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2);

    }

    getLeftChildIndex(i){
        return i * 2 + 1;
    }

    getRightChildIndex(i){
        return i * 2 + 2;
    }

    swap(i1,i2){
        let temp = this.arr[i1];
        this.arr[i1] = this.arr[i2];
        this.arr[i2] = temp;
    }

    heapifyDown(){
        let currentIndex = this.arr.length - 1;
        while(this.arr[currentIndex] < this.arr[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    push(element){
        this.arr[this.arr.length] = element;
        this.heapifyDown();
    
    }

    print(){
        console.log(this.arr);
    }
}

const heap = new MinHeap();
heap.push(100);
heap.push(90);
heap.push(80);
heap.push(70);
heap.push(60);
heap.push(50);
heap.push(20);
heap.print();

//implimentation of heap 

class MaxHeap{
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

    swap(i1, i2){
        const temp = this.arr[i1];
        this.arr[i1] = this.arr[i2];
        this.arr[i2] = temp;
    }

    heapifyUp(){
        let currentIndex = this.arr.length - 1;
        while(this.arr[currentIndex] > this.arr[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    push(element){
        this.arr[this.arr.length] = element;
        this.heapifyUp();
    }

    print(){
        console.log(this.arr);
    }

}

const heap = new MaxHeap();
heap.push(100);
heap.push(90);
heap.push(80);
heap.push(70);
heap.push(60);
heap.push(50);
heap.print();
heap.push(65);
heap.push(200);
heap.print();




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

    //removing elements from a heap
    delete(){
        var item = this.arr.shift();
        this.arr.unshift(this.arr.pop());
        var index = 0 ;
        var leftChild = this.getLeftChildIndex(index);
        var rightChild = this.getRightChildIndex(index);
        while(this.arr[leftChild]  && this.arr[leftChild] > this.arr[index] || this.arr[rightChild] > this.arr[index]){
             var max = leftChild;
             if(this.arr[rightChild] && this.arr[rightChild] > this.arr[max]){
                max = rightChild
             }
             this.swap(max,index);
             index = max;
             leftChild = this.getLeftChildIndex(max);
             rightChild =  this.getRightChildIndex(max);
        }
        return item;
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
heap.delete();
heap.print();




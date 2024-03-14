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
        this.heapifyUp();
        return item;
    }

    print(){
        console.log(this.arr);
    }

}

function heapSort(arr){
    let sortedArr = [];
    let heap = new MaxHeap();

    for(let i = 0 ; i < arr.length; i++){
        heap.push(arr[i]);
    }

    for(let i = 0 ; i < arr.length ; i++){
        sortedArr.push(heap.delete());
    }
    return sortedArr;
}

const arr = [15,36,45,23,20,78,50,14];
console.log(heapSort(arr));
const arr = [[1,1,0],[0,0,1],[1,0,1,1]];

function countOne(arr){
    let count = 0;
    for(let sub of arr){
        for(let ele of sub){
            if(ele === 1){
                count ++;
            }
        }
    }
    return count;
}


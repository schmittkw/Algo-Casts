// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// first solution

function chunk(array, size) {
    var newArr = [];
    for(var i = 0; array[i]!=undefined; ){
        newArr2 = [];
        for(var k = 1; k <= size; k++){
            if(array.length!=0){
                newArr2.push(array.shift());
            }
        }
        newArr.push(newArr2);
    }
    return newArr;
}



// second solution

// function chunk(array, size){
//     const chunked = [];
//     for(let element of array){
//         const last = chunked[chunked.length-1];

//         if(!last || last.length === size){
//             chunked.push([element]);
//         }
//         else{
//             last.push(element);
//         }
//     }
//     return chunked;
// }



// third solution using slice

// function chunk(array, size){
//     const chunked = [];
//     let i = 0;

//     while (i < array.length){
//         chunked.push(array.slice(i, i + size));
//         i += size;
//     }
//     return chunked;
// }


module.exports = chunk;

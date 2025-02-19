let myArray = [1,4,2,3,5,6];
let anotherArray = [];

function sumArray(array){

    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum += array[i];

    }
    return sum;
}


console.log(sumArray(myArray));
console.log(sumArray(anotherArray));

// Write a function to find the average value in an array of numbers

//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function average(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total = total + array[i];
    } 
    return total / array.length;
}   

arr1 = [0, 50];
arr2 = [75, 76, 80, 95, 100];

console.log(average(arr1));
console.log(average(arr2));

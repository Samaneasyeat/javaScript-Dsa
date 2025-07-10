// Given an array of integers, find the largest and smallest element in the array.

// Example:
// Input → [3, 7, 2, 8, 1, 4]
// Output →

// Largest = 8

// Smallest = 1
function findLargestAndSmallest(a){
    let sortArray = a.sort((a, b) => a - b);
    let largest = sortArray[a.length-1];
   console.log(`largest is ${largest} and smallest is ${sortArray[0]} `);
}
findLargestAndSmallest([8,4,3]);

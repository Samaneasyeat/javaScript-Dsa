// Given an array of numbers, return a new array containing only numbers greater than 5.

// Example:

// js
// Copy
// Edit
// Input:  [3, 7, 1, 9, 4]
// Output: [7, 9]


function findNumberGreatestThanFive(arr){
    return arr.filter(num=>num>5);
}
console.log(findNumberGreatestThanFive([3,5,6,7,8]))
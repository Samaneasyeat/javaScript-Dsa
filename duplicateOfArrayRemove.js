// Given an array of numbers, return a new array containing only the unique elements (i.e. remove duplicates).

// Example:
// Input → [1, 2, 2, 3, 4, 4, 5]
// Output → [1, 2, 3, 4, 5]
function DuplicateOfArray(a) {
    let array = [];
    for (let index = 0; index < a.length; index++) {
        if (!array.includes(a[index])) {
            array.push(a[index]);
        }
    }
    console.log(array);
}

DuplicateOfArray([1, 2, 2, 3, 4, 4, 5]); 
// Output: [1, 2, 3, 4, 5]

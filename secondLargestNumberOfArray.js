// find the second largest number of an array
function secondLargestNumber(a){
    let sortArray = a.sort((a, b) => a - b);
    console.log(sortArray[a.length-2]);
}
secondLargestNumber([9,10,8,7]);
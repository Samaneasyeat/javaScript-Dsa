// given an array, write a program to print odd numbers first, and then print even numbers.
function arrayWithODd(arr){
    let a = [];
    let even = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2 != 0){
            a.push(arr[index]);
        }
        else{
            even.push(arr[index]);
        }
        
    }    
    console.log(a.concat(even));
}
arrayWithODd([2,1,4,5,6]);
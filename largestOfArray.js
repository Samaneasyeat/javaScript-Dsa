
// Finding greatest number in given  array 

function findLargestOfArray(a){
    max = a[0];
    for(let i = 1 ; i< a.length ; i++){
        if(max < a[i] ){
            max = a[i];
        }
    }
    console.log(max);

}
findLargestOfArray([8,9,10]);
findLargestOfArray([-2,-1]);
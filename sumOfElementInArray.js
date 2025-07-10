function sumOfElementInArray(a){
    let sum = 0 ;
    for (let index = 0; index < a.length; index++) {
        if(a[index]%2 === 0){
        sum  = sum + a[index];}
    }
    console.log(sum);
}
sumOfElementInArray([2,32,3,8]);
sumOfElementInArray([1, 4, 5, 8, 9, 10]);
function removeDuplicateString(a){
    let result = "";
    for(let i =0 ; i <a.length ; i++){
        if(!result.includes(a[i]))
        result+= a[i];
    }
   console.log(result);

}
removeDuplicateString("saman");
removeDuplicateString("Javascript");
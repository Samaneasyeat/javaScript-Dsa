// Write a function to check if a string is a palindrome (ignoring casing).

// Example:

// "Racecar" → true

// "hello" → false
function checkPalindrom(a){
    let reversed = "";
    for(let i = a.length - 1 ; i>=0;i--){
        reversed+= a[i];
    }
   if(reversed === a)
   {
    console.log("true");
   }
   else{
    console.log("false");
   }
}
checkPalindrom("saman");
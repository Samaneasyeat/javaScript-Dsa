function moveZeroes(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    return arr;
  }
  console.log(moveZeroes([2,8,0,0,9,7]));
  console.log(null instanceof Object);
  console.log("5" + true);
  console.log("5" > 2);
  console.log("five" * 2);
  async function foo() {
    return 5;
  }
  
  console.log(foo());
  foo().then(res => console.log(res));
  
function allZeroAtEnd(arr) {
    let pos = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[pos] = arr[i];
        pos++;
      }
    }
  
    // Fill the rest with zeroes
    while (pos < arr.length) {
      arr[pos] = 0;
      pos++;
    }
  
    console.log(arr);
  }
  
  allZeroAtEnd([0, 0, 2, 3]); 
  // Output: [2, 3, 0, 0]
  
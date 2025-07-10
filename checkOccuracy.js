function countFrequencies(arr) {
    let freq = {};
  
    for (let num of arr) {
      if (freq[num]) {
        freq[num]++;
      } else {
        freq[num] = 1;
      }
    }
  
    for (let key in freq) {
      console.log(`${key} → ${freq[key]} ${freq[key] > 1 ? "times" : "time"}`);
    }
  }
  
  countFrequencies([2, 3, 2, 5, 3, 3, 4]);
  
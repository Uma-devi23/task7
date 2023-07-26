function findOverlap(word1, word2) {
    let overlap = "";
    for (let char of word1) {
      if (word2.includes(char)) {
        overlap = char;
        break;
      }
    }
    return overlap;
  } 
  function join(words) {
    let result = words[0];
    let minSharedCount = Infinity;
  
    for (let i = 1; i < words.length; i++) {
      const overlap = findOverlap(result, words[i]);
      result += words[i].replace(new RegExp(overlap, "g"), "");
  
      const sharedCount = overlap.length;
      if (sharedCount < minSharedCount) {
        minSharedCount = sharedCount;
      }
    }
    return [result, minSharedCount];
  }
  console.log(join(["oven", "envier", "erase", "serious"]));  
  console.log(join(["move", "over", "very"])); 
  console.log(join(["to", "ops", "psy", "syllable"]));   
  console.log(join(["aaa", "bbb", "ccc", "ddd"]));   
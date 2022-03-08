function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((acc,cur)=>{
    if(acc[cur]){
      acc[cur] = acc[cur]+1;
    }else{
      acc[cur] = 1;
    }
    // acc[cur] = ++acc[cur] || 1 // increment or initialize to 1
    return acc;
  },{})
}

module.exports = countWords

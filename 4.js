// -------------Task 4 [big string]-----------------------

function longestWord(string){
  let str1 = string.split(' ');
  let longestWord = "";

  for(let i=0; i<str1.length;i++ ){
    if(str1[i].length > longestWord.length){
      longestWord = str1[i]
    }
  }
  return longestWord;
 
}

const string = longestWord("I am learning Programming to become a programmer");
const result = longestWord(string);
console.log(result);
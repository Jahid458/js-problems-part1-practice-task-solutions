// -------------Task 3 [vowel count]-----------------------
 
function vowelCounts(string){
  let count = 0 ; 
  for(const str of string){
    if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
      count++;
    }
  }
  return "Vowel counts is: " + count;
}

const str1 = "hello Bangladesh";
const result = vowelCounts(str1);
console.log(result);
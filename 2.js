// Task 2 array find how element
function duplicateArray(numbers,find){
  console.log("Find", find)
  let count = 0 ; 
  for(const number of numbers){
    if(number === find){
      count++;
    }
    // console.log(number)
  }
  return "Output:" + count; 
}

const arr1 = [5,6,11,12,98, 5];
const result = duplicateArray(arr1,25);
console.log(result);
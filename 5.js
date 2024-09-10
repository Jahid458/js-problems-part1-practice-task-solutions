function randomMath(min, max){
  return Math.floor(Math.random() * (max-min + 1) + min )
}
console.log(randomMath(10,20))
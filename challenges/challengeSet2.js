function characterIsALetter(c) {
 let charCode = c.toUpperCase().charCodeAt(0);
 return charCode >= 65 && charCode <=90;
}

function countOfElementsIsEven(vals) {
  //(array) => number
  return vals.length % 2 == 0;
  }

function isNumberEven(number) {
  return number % 2 == 0;
}

function isNumberOdd(num) {
  return number % 2 == 1;
}

function sumOfMinAndMax(numbers) {
 return Math.min(...numbers) + Math.max(...numbers);
}

function getLengthOfShortestString(str1, str2) {
  //("string", "string") => number
 /*if(str1.length < str2.length){
   return str1.length;
 }else{
   return str2.length
 }*/
 return str1.length < str2.length ? str1.length : str2.length;
}

function sum(numbers) {
  return numbers.reduce((acc, num) => {
    return acc + num
  }, 0);
}

function sumEvens(numbers) {
  return numbers.reduce((acc, num) =>{
    if(num % 2 ==0){
      return acc + num;
    }else{
      return acc;
    }
  }, 0)
}

function isSumOdd(numbers) {
  let sumOfNums = sum(numbers);
  return sumOfNums % 2 ==1;
}

function countOfPositiveOddsBelowNumber(number) {
  let arrOfOdds = []

  for(let i=1; i< number; i+=2){
    arrOfOdds.push(i);
  }

  return arrOfOdds.length;
}

// DO NOT CHANGE EXPORT STATEMENT
module.exports = {
  countOfPositiveOddsBelowNumber,
  isSumOdd,
  sumEvens,
  sum,
  getLengthOfShortestString,
  isNumberEven,
  isNumberOdd,
  sumOfMinAndMax,
  countOfElementsIsEven,
  characterIsALetter,
};

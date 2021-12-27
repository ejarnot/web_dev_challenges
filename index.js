let testInput1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let total = 0;

console.log(
  testInput1.reduce((sum, num) => {
    if (num % 2 == 0) {
      total++;
      return sum + num;
    } else return sum;
  }, 0) / total
);

const faker = require("faker");
const each = require("jest-each");
const {
  longestString,
  mostCommonCharacter,
  isAnagram,
  isPalindrome,
  validEncasings,
  isArmstrongNumber,
} = require("../challenges/advanced-challenges");
const {
  longestStringSolution,
  mostCommonCharacterSolution,
  isAnagramSolution,
  isPalindromeSolution,
  validEncasingsSolution,
  isArmstrongNumberSolution,
} = require("../solutions/advanced-challenges");
const { filledArray } = require("../utils/factories");

// 1.
describe("longestString()", () => {
  let testInput = ["Please", "my", "Dear", "Aunt", "Sally"];
  test("1 | Should return 'Please'", () => {
    expect(longestString(testInput)).toBe(longestStringSolution(testInput));
  });

  testInput = filledArray();
  test(`2 | Should return the ${longestStringSolution(testInput)}`, () => {
    expect(longestString(testInput)).toBe(longestStringSolution(testInput));
  });

  testInput = filledArray();
  test(`3 | Should return the ${longestStringSolution(testInput)}`, () => {
    expect(longestString(testInput)).toBe(longestStringSolution(testInput));
  });

  testInput = filledArray();
  test(`4 | Should return the ${longestStringSolution(testInput)}`, () => {
    expect(longestString(testInput)).toBe(longestStringSolution(testInput));
  });

  testInput = filledArray();
  test(`5 | Should return the ${longestStringSolution(testInput)}`, () => {
    expect(longestString(testInput)).toBe(longestStringSolution(testInput));
  });

  testInput = filledArray();
  test(`6 | Should return the ${longestStringSolution(testInput)}`, () => {
    expect(longestString(testInput)).toBe(longestStringSolution(testInput));
  });
});

// 2.
test("2 | Should return the most recurring character", () => {
  let testInput = "Been";
  expect(mostCommonCharacter(testInput)).toBe(
    mostCommonCharacterSolution(testInput)
  );

  testInput = "eleven";
  expect(mostCommonCharacter(testInput)).toBe(
    mostCommonCharacterSolution(testInput)
  );

  testInput = faker.random.word();
  expect(mostCommonCharacter(testInput)).toBe(
    mostCommonCharacterSolution(testInput)
  );

  testInput = faker.random.word();
  expect(mostCommonCharacter(testInput)).toBe(
    mostCommonCharacterSolution(testInput)
  );

  testInput = faker.random.word();
  expect(mostCommonCharacter(testInput)).toBe(
    mostCommonCharacterSolution(testInput)
  );
});

// 3.
test("3 | Should return true/false if input is an anagram", () => {
  let testInput1 = "adverb";
  let testInput2 = "braved";
  expect(isAnagram(testInput1, testInput2)).toBe(
    isAnagramSolution(testInput1, testInput2)
  );

  testInput1 = faker.random.word();
  testInput2 = faker.random.word();
  expect(isAnagram(testInput1, testInput2)).toBe(
    isAnagramSolution(testInput1, testInput2)
  );

  testInput1 = "plane";
  testInput2 = "panel";
  expect(isAnagram(testInput1, testInput2)).toBe(
    isAnagramSolution(testInput1, testInput2)
  );

  testInput1 = faker.random.word();
  testInput2 = faker.random.word();
  expect(isAnagram(testInput1, testInput2)).toBe(
    isAnagramSolution(testInput1, testInput2)
  );

  testInput1 = faker.random.word();
  testInput2 = faker.random.word();
  expect(isAnagram(testInput1, testInput2)).toBe(
    isAnagramSolution(testInput1, testInput2)
  );
});

// 4.
test("4 | Should return true/false if input is a palindrome", () => {
  let testInput = "adverb";
  expect(isPalindrome(testInput)).toBe(isPalindromeSolution(testInput));

  testInput = "mom";
  expect(isPalindrome(testInput)).toBe(isPalindromeSolution(testInput));

  testInput = faker.random.word();
  expect(isPalindrome(testInput)).toBe(isPalindromeSolution(testInput));

  testInput = faker.random.word();
  expect(isPalindrome(testInput)).toBe(isPalindromeSolution(testInput));

  testInput = faker.random.word();
  expect(isPalindrome(testInput)).toBe(isPalindromeSolution(testInput));
});

// 5.
test("5 | Should return true/false if input has valid syntax enclosings", () => {
  let testInput = "function ( { console.log('Hello World') };";
  expect(validEncasings(testInput)).toBe(validEncasingsSolution(testInput));
});

// 6.
test("6 | Should return true/false if input is an Armstrong number", () => {
  let testInput = 370;
  expect(isArmstrongNumber(testInput)).toBe(
    isArmstrongNumberSolution(testInput)
  );

  testInput = faker.datatype.number();
  expect(isArmstrongNumber(testInput)).toBe(
    isArmstrongNumberSolution(testInput)
  );

  testInput = faker.datatype.number();
  expect(isArmstrongNumber(testInput)).toBe(
    isArmstrongNumberSolution(testInput)
  );

  testInput = faker.datatype.number();
  expect(isArmstrongNumber(testInput)).toBe(
    isArmstrongNumberSolution(testInput)
  );

  testInput = faker.datatype.number();
  expect(isArmstrongNumber(testInput)).toBe(
    isArmstrongNumberSolution(testInput)
  );
});

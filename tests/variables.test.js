const {
  myName,
  myBirthYear,
  isAProgrammer,
  hugeJSNumber,
  notDefined,
  shouldBeNull,
} = require("../challenges/variables");

test("myName should be a string value", () => {
  expect(typeof myName).toBe("string");
});

test("myBirthYear should be a number value", () => {
  expect(typeof myBirthYear).toBe("number");
});

test("isAProgrammer should be a boolean value", () => {
  expect(typeof isAProgrammer).toBe("boolean");
});

test("hugeJSNumber should be a bigint value", () => {
  expect(typeof hugeJSNumber).toBe("bigint");
});

test("notDefined should be a undefined value", () => {
  expect(typeof notDefined).toBe("undefined");
});

test("shouldBeNull should be a null value", () => {
  expect(shouldBeNull).toBe(null);
});

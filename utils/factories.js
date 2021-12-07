const faker = require("faker");

const filledArray = (dataType = "string", max = 1000, min = 0) => {
  let arr = [];
  let upperLimit = Math.floor(Math.random() * (max - min + 1)) + min;
  if (dataType == "number") {
    for (let i = min; i < upperLimit; i++) {
      arr.push(faker.datatype.number());
    }
  } else {
    for (let i = min; i < upperLimit; i++) {
      arr.push(faker.random.word());
    }
  }

  return arr;
};

module.exports = {
  filledArray,
};

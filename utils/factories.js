const faker = require("faker");

const filledArray = (dataType = "string", max = 10000, min = 0) => {
  let arr = [];
  if (dataType == "number") {
    for (let i = min; i < max; i++) {
      arr.push(faker.datatype.number());
    }
  } else {
    for (let i = min; i < max; i++) {
      arr.push(faker.random.word());
    }
  }
};

module.exports = {
  filledArray,
};

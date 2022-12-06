const assert = require('chai').assert;
const countOnly = require('../countOnly');


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



describe("Counts the number of times a specific name appears", () => {
  it("should return { 'Jason': 1, 'Fang': 2}", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Fang': true, 'Joe': true}), { 'Jason': 1, 'Fang': 2, 'Joe': 1})
  });
  it("should return { 'Karl': 1, 'Joe': 1}", () => {
    assert.deepEqual(countOnly(firstNames, {'Karl': true, 'Joe': true, 'Salima': false}), { 'Karl': 1, 'Joe': 1})
  });
});


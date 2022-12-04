const assertEqual = require('../assertEqual');
const tail = require('../tail');

  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 2);
  assertEqual(tail([5,6,7,6]), 6);
  assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
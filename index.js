/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000;
let ageIsValid;

if (Number.isInteger(currentAge)){
  ageIsValid = true;
}
else{
  ageIsValid = false;
}

let randomNumber = Math.random();
let randomInteger = Math.floor(randomNumber);
let randomUserID = randomInteger + 1000000001;
//
// if (currentAge.isInteger())
//   ageIsValid = true;
// else
//   ageIsValid = false;

// function ageIsValid(currentAge) {
//   if currentAge.isInteger()
//     return true;
//   else
//     return false;
// }

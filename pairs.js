/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
function pairs(names) {
  if (names == [] || names == null) return [];

  let namesHolder = [];
  let namesNewHome = [];
  let nameHolder1 = "";
  let nameHolder2 = "";

  if (names.length % 2 == 0) {
    while (names.length !== 0) {
      // remove first and last element and save them
      nameHolder1 = names[0];
      names.splice(0, 1);
      nameHolder2 = names.pop();

      // push them in the names holder
      namesHolder.push(nameHolder1, nameHolder2);
      //namesHolder.push(nameHolder2);

      // push my new array of pairs in my array of arrays
      namesNewHome.push(namesHolder);

      //Empty the names holder
      namesHolder = [];
    }

    return namesNewHome;
  }

  while (names.length !== 1) {
    // remove first and last element and save them
    nameHolder1 = names[0];
    names.splice(0, 1);
    nameHolder2 = names.pop();

    // push them in the names holder
    namesHolder.push(nameHolder1);
    namesHolder.push(nameHolder2);

    // push my new array of pairs in my array of arrays
    namesNewHome.push(namesHolder);

    //Empty the names holder
    namesHolder = [];
  }

  // odd number will have one element left that will be pushed alone
  namesNewHome.push(names.splice(0, 1));

  return namesNewHome;
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

// Separate array testing
let names = ["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz"];

// printing test:
// First element check
// console.log(names.splice(0, 1));
// console.log(names[0]);

// odd test
console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);

// even test
//console.log(pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz"]));

/* Test the empty
console.log(pairs());
console.log(pairs([]));
*/

/* 

Testing the given method:
let list = [
  "Asis",
  "Hamsa",
  "Fawas",
  "Mishmish",
  "Hussein",
  "Lailz",
  "Mr Potato",
];
console.log(list.getRandom());

*/

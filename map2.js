var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });


//make new array
//for each element (iterate through an array)
//do something to each element
//push element to new array

// function myMap(input, cb) {
//   var output = [];
//   for (i = 0; i < input.length; i++) {
//     output.push(cb(input[i]));
//   }
//   return output;
// }

function myMap(input, cb) {
  var output = [];
  input.forEach(function(word, i){
    output.push(cb(word));
  })
  return output;
}

console.log(myMap(words, function(word) {
  return word.length;
}));

console.log(myMap(words, function(word) {
   return word.toUpperCase();
}));

console.log(myMap(words, function(word) {
   return word.split('').reverse().join('');
}));

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


const fruits = ["apple", "banana", "orange"];
//console.log(fruits.indexOf("apple"));
if (fruits.indexOf("apple") !== -1) {
    console.assert('hello apple');
} else {
    console.log('apple is not found');
}

console.log('----includes----');
console.log(fruits.includes("apple"));
if (fruits.includes("apple")) {
    console.log('hello apple');
} else{
    console.log('apple is not found');
}

const fruitsToCheck = ["apple", "grape", "mango", "cherry"];

let filterFruits = fruitsToCheck.filter(f => fruits.includes(f));
console.log(filterFruits);
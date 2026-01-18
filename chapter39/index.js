
let users = ["jane", "john", "jill"];
let userCount = users.length;

for (let i = 0; i < userCount; i++) {
    console.log(users[i]);
}

console.log('-----for-----');

for (const user of users) { 
    console.log(user);
}

let text = "hello java ";
for (const element of text) {
    console.log(element);
}

let capitals = new Map ([
    ["thailand", "bangkok"],
    ["japan", "tokyo"]
]);
for (const [c, cap] of capitals) {
    console.log(`${c}: ${cap}`);
}

let fruits = ["apple", "banana"];
let colors = ["red", "yellow"];

for (const fruit of fruits) {
    for (const color of colors) {
        console.log(`${fruit} มีสี ${color}`);
    }
}

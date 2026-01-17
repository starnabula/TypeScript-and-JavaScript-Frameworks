const { Profiler } = require("react");

const obj = { a:1, b:2, c:3 };
console.log(obj.a, obj.b, obj.c);

function getObj(obj) {
    const a = obj.a;
    const b = obj.b;
    console.log(a, b);

}

getObj(obj);


const {a, b, c} = obj;
console.log(a, b, c);

const arr = [1, 2, 3];

const first = arr[0];
const second = arr[1];

const [first2, second2] = arr;
console.log(first2, second2);


function getObj2(obj) {
    const {a, b, d = 10} = obj;
    console.log(a, b, d);
}
getObj(obj);

function getObj3(obj) {
     const {a, b,} = obj;

}
getObj3(obj);

const user = { Profiler: {name: 'j', age: 20 } };
const { Profiler: { name: fullname, age } } = user;
console.log(fullname, age);
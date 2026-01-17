
let book = { title: 'js' , priice: 300 };

book = 'new book';
console.log(book);

const book2 = { title: 'ts', price: 300 };
//book2 = 'new book';
book2.author = 'Mary may';
book2.title = 'php';
console.log(book2);

for (let index = 0; index < 5; index++) {
    let numbers = [];
    numbers.push(index);
    numbers = 0;
    console.log(numbers);
}
console.log('=============');

for (let index = 0; index < 5; index++) {
    const numbers = [];
    numbers.push(index);
    console.log(numbers);
}


let arr = [1, 2, 3];
const arr2 = [1, 2, 3]; 
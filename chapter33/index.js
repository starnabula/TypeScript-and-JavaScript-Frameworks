
function greetMorning(fullname) {
    return 'Good morning, ' + fullname;
}
function greetEvening(fullname) {
    return 'Good evening, ' + fullname;
}


function greet(timeOfDay, fullname) {
    return  `good ${timeOfDay}, ${fullname}`;
}
console.log(greet('morning', 'John'));  
console.log(greet('evening', 'mary'));
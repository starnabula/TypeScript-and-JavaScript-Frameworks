
function getDayName(day) {
    switch (day) {
        case 1: return 'Monday';
        case 2: return "Tuesday";
    }
}

console.log(getDayName(5)) ;


function getDayName2(day) {
    switch (day) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        default:
            //return 'day is invalid';
            throw new Error('day is invalid');
    }
}
console.log(getDayName2(5));
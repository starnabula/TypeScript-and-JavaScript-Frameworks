
function badPractice() {
    myGlobal = "This is a global ";
}

badPractice();
console.log(myGlobal);
myGlobal = "test";
console.log(myGlobal);
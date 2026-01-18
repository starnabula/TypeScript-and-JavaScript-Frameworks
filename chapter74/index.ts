
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(10, 2));

function sum2(a: number, b: number): number {
    return a + b;
}

function showMessage(): void{
    console.log("Hello message");
}


console.log(sum2(10, 2));
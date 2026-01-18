
function processInput(input: any) {
    console.log(input);
}

processInput("100");

function processInput2(input: unknown) {
    if (typeof input === "string") {
        console.log(input.toLowerCase());
    }
}

processInput2("hello");
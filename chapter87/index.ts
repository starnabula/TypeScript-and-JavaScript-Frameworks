
//const value: unknown = getvalue();
//const name = (value as string).toUpperCase();

function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") throw new Error("Expected a string");
}

const value: unknown = "jo";
assertIsString(value);
const fullname = value.toUpperCase();
console.log(fullname);
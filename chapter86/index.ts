
type MaybeString = string | null | undefined;

function processString(value: NonNullable<MaybeString>) {
    console.log(value.toLowerCase);
}


// const MaybeString = null;

// if (MaybeString != null){
//     processString(MaybeString);
// }

const MayString = null;

if (MayString != null){
    processString(MayString);
}

const MayString2 = "hello";

processString(MayString2);
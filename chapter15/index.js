
const value = 0;

if (value) {
    console.log('ไม่รันในี้เพราะ 0 คือ falsy');
}

if (value === 0) {
    console.log('ไม่มีปัญหา จะรันเฉพราะ value เท่ากับ 0'); 

}


const score = null;
if (score === null) {   
    console.log('score is defined')
} else {
    console.log('score is null or undefined');
}
  

const text = ''
if(text === '') {
    console.log('not empty');
} else {
    console.log('is empty');
}


const input = 0;
if (typeof input === 'number' && input !== 0) {
    console.log('valid number');
} else {
    console.log('invalid number or zero');
}

const obj = {};
if (Object.keys(obj).length > 0) {
    console.log('Object is not empty');
} else {
    console.log('Object is empty');
}
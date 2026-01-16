
/** 
*@typeof {Object} user 
*@property {string} fullname - ชื่อ-นามสกุล
*@property {Number} age - อายุ
*/

/**
 * @param {user} user - ข้อมูลผู้ใช้
 * @param {boolean} isActive - ทำงานอยู่หรื่อไม่
 * 
*/
function printUser(user, isActive) {
    console.log(user. fullname);
    console.log(user.age);
    console.log(isActive ? 'true': 'false');
}

    printUser({fullname: "Jotaro", age: 10}, false);
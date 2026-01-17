
function add(a, b = 10) {
    return a + b;
}
console.log(add(5));    






function logMessage(message, ...moreMessages) {
    const message2 = moreMessages.length > 0 ? moreMessages : ['default'];
    console.log(message, ...message2);
}

logMessage('Hello js');
logMessage('a', 'b', 'c', 'd');
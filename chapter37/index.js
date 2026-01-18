
function showMessage() {
    //setInterval("js bad code", 3000);
    setInterval(() => {
   console.log("hello js every 3 seconds")

    },3000)

    setTimeout(() => {
        console.log("hello js 2 only once");
    }, 3000);
}


showMessage();
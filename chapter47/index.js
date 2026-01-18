
<button id="myBtn">Click me</button>

const myBtn = document.getElementById("myBtn");

function handleClick() {
    alert("Hello");
    myBtn.removeEventListener("click", handleClick);
}

myBtn.addEventListener("click", handleClick);
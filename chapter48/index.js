

<button id="myBtn">Click me</button>

const myBtn = document.getElementById("myBtn");

function handleClick() {
    alert("Hello");
}

myBtn.addEventListener("click", handleClick, {
    once: true,
});
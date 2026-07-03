const btn = document.getElementById("nope-btn");
const counter = document.getElementById("counter");

let count = 0;
let scale = 1.0;

btn.addEventListener("mouseover", () => {
    counter.innerText = ++count;

    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

btn.addEventListener("click", () => {
    alert("HOW DID YOU DO THAT?! You win!");

    counter.innerText = count = 0;
    scale = 1.0;

    btn.style.cssText = "top: 50%; left: 50%; transform: scale(1);";
});
const btn = document.getElementById("nope-btn");
const counter = document.getElementById("counter");

const taunts = [
    "Too slow!",
    "Missed me!",
    "Nope!",
    "Try again!",
    "Is that all?",
    "Almost!",
    "Not even close!",
    "Catch me!",
    "Haha!",
    "Need glasses?"
];

let count = 0;

btn.addEventListener("mouseover", () => {
    counter.innerText = ++count;

    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    const randomHue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${randomHue}, 100%, 50%)`;

    const randomTaunt = taunts[Math.floor(Math.random() * taunts.length)];

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.style.backgroundColor = randomColor;
    btn.innerText = randomTaunt;
});

btn.addEventListener("click", () => {
    alert("HOW DID YOU DO THAT?! You win!");

    counter.innerText = count = 0;

    btn.style.cssText = "top: 50%; left: 50%; transform: scale(1); background-color: red;";
    btn.innerText = "Click Me!";
});
// background
const background = document.querySelector("body");
background.style.backgroundColor = "grey";

// heading
const heading = document.createElement("h1");
heading.textContent = "Etch A Sketch";
document.body.appendChild(heading);

// Create a webpage with a 16x16 grid of square divs.
const div1 = document.createElement("div");
document.body.appendChild(div1);

const div2 = document.createElement("div");
div1.appendChild(div2);

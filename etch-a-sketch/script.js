// background
const background = document.querySelector("body");
background.style.backgroundColor = "grey";

// heading
const heading = document.createElement("h1");
heading.textContent = "Etch A Sketch";
document.body.appendChild(heading);

// Create a webpage with a 16x16 grid of square divs.
const div = document.createElement("div");
div.style.width = "864px";
div.style.height = "864px";
div.style.display = "flex";
div.style.flexWrap = "wrap";
document.body.appendChild(div);

// const div2 = document.createElement("div");
// div2.style.width = "16px";
// div2.style.height = "16px";
// div2.style.border = "1px solid black";
// div1.appendChild(div2);

function grid() {
  for (i = 0; i < 256; i++) {
    const div2 = document.createElement("div");
    div2.style.width = "50px";
    div2.style.height = "50px";
    div2.style.border = "2px solid black";
    div.appendChild(div2);
  }
}
grid();

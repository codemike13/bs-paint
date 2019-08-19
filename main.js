const clearButton = document.querySelector("#clearCanvas");
const fillButton = document.querySelector("#fillColors");
const app = document.querySelector(".app");
const pixel = document.querySelector(".palette-color");
const brush = document.querySelector(".current-brush");
const palette = document.querySelector(".palette");
const palettePixels = palette.querySelectorAll("div");
const canvas = document.querySelector(".canvas");
const canvasPixels = canvas.querySelectorAll("div");
const brushMode = document.querySelector("#brushMode");
const eraser = document.querySelector("#selectMode");
const save = document.querySelector("#save")

function fillCanvas() {
  for (let i = 1; i < 22500; i++) {
    console.log("here");
    let pixel = document.createElement("div");
    pixel.className = "square";

    canvas.appendChild(pixel);
  }
}
fillCanvas();
////////////////////// Click ACTIONS ////////////////////////////////

fillButton.addEventListener("click", function() {
  palettePixels.forEach(element => {
    colorRandom(element);
  });
});

palette.addEventListener("click", function(event) {
  brush.style.backgroundColor = event.target.style.backgroundColor;
});

clearButton.addEventListener("click", () => {
  const canvasPixels = canvas.querySelectorAll("div");

  canvasPixels.forEach(element => {
    element.style.backgroundColor = "rgb(255,255,255)";
  });
});

eraser.addEventListener("click", element => {
  brush.style.backgroundColor = "white";
});

canvas.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = brush.style.backgroundColor;
});

save.addEventListener("click",function() {

})


///////////////////////// FUNCTIONS /////////////////////////////////

function colorRandom(element) {
  let R = Math.round(Math.random() * 255);
  let G = Math.round(Math.random() * 255);
  let B = Math.round(Math.random() * 255);
  element.style.backgroundColor = `rgb(${R},${G},${B})`;
}

function colorActive(event) {
  document.querySelector(element).classlist.toggle("lightpurple");
}

function buttonOn(button) {
  button.addEventListener("click", colorActive);
}

function buttonOff(button) {
  button.removeEventListener("click", colorActive);
}

function toggleButton(state, button) {
  if (state === 0) {
    buttonOn(button);
  } else {
    buttonOff(button);
  }
}

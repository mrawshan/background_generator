var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rendomBtn = document.getElementById("btn1");

//Function for setGradient
function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

//Function to generate random color
function randomColor() {
    let hexColor = Math.random().toString(16);
    hexColor = "#" + hexColor.slice(2, 8);
    return hexColor;
}

//Function to change the background after button click
function randomBackground() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
  }

//Page onload show the default color
body.onload = setGradient();

//Input color1 and color2
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Button to generate the random color
rendomBtn.addEventListener("click", randomBackground);

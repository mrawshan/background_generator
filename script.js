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

//Function for random color
function randomColor() {
    // var randomValue = Math.floor((Math.random() * 256) + 0);
    return `#${((1 << 24) * Math.random() | 0).toString(16)}`;
}

//Function to generate random color
function generateRandomColor() {
    let colourHex1 = randomColor();
    let colourHex2 = randomColor();

    body.style.background = `linear-gradient(to right, ${colourHex1}, ${colourHex2}`;
    css.textContent = `${body.style.background};`;

    color1.value = colourHex1; //set inputs to show the right colours
    color2.value = colourHex2;
}

//Input color1 and color2
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Page onload show the default color
body.onload = setGradient();

//Button to generate the random color
rendomBtn.addEventListener("click", generateRandomColor);
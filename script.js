const colorInput = document.getElementById("colorInput");
const colorBox = document.getElementById("colorBox");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");

colorInput.addEventListener("input", function() {
    const color = colorInput.value;
    colorBox.style.backgroundColor = color;
    hexValue.textContent = color;
    rgbValue.textContent = hexToRgb(color);
});

function hexToRgb(hex) {
    const r = parseInt(hex.substr(1,2), 16);
    const g = parseInt(hex.substr(3,2), 16);
    const b = parseInt(hex.substr(5,2), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
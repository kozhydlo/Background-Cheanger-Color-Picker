const btn = document.getElementById("btn");
const color = document.querySelector(".color")

const hex = [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
]


btn.addEventListener("click", () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
});

color.addEventListener("click", () => {
    copyText(color.textContent);
    showModal("Текст скопійовано та додано в особистий кабінет  ");
});
function generateHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRendomNumber()]
    }

    return hexColor;
}

function getRendomNumber (){
    return Math.floor(Math.random() * hex.length);
}


function copyText(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function showModal(message) {
    const modal = document.createElement("div");
    modal.textContent = message;
    modal.classList.add("modal");
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);

    setTimeout(() => {
        document.body.removeChild(modal);
    }, 2000);
}

document.querySelectorAll('.color').forEach(function(span) {
    span.addEventListener('click', function() {
        const color = this.textContent; 
        saveColor(color); 
    });
});

function saveColor(color) {
    const savedColors = JSON.parse(localStorage.getItem('savedColors')) || [];
    savedColors.push(color);
    localStorage.setItem('savedColors', JSON.stringify(savedColors));
}


function displaySavedColors() {
    const savedColors = JSON.parse(localStorage.getItem('savedColors'));
    if (savedColors) {
        const colorsContainer = document.getElementById('colors');
        colorsContainer.innerHTML = ''; 
        savedColors.forEach(function(color) {
            const colorSpan = document.createElement('span');
            colorSpan.textContent = color;
            colorSpan.classList.add('saved-color');
            colorsContainer.appendChild(colorSpan);
        });
    }
}

window.addEventListener('DOMContentLoaded', function() {
    displaySavedColors();
});
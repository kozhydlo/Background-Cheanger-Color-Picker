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
    showModal("Текст скопійовано");
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

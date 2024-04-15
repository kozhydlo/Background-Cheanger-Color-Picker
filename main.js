const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const selectedColor = document.getElementById('selectedColor');
const button = document.querySelector('.btn');
let isColorPicked = false;

fileInput.addEventListener('change', handleFileSelect);
button.addEventListener('click', colorPicker);
selectedColor.addEventListener('click', copyColor);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const maxWidth = 400;
            const maxHeight = 300;
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
        }
        img.src = event.target.result;

        canvas.addEventListener('click', pickColor);
    }

    reader.readAsDataURL(file);
}

async function colorPicker() {
    const eyeDropper = new EyeDropper();
    const {sRGBHex} = await eyeDropper.open();

    selectedColor.textContent = sRGBHex;
    selectedColor.style.backgroundColor = '#' + sRGBHex;
}

function pickColor(event) {
    if (!isColorPicked) {
        const x = event.offsetX;
        const y = event.offsetY;
        const imageData = ctx.getImageData(x, y, 1, 1);
        const pixel = imageData.data;
        const rgbColor = pixel[2] | (pixel[1] << 8) | (pixel[0] << 16);

        selectedColor.textContent = rgbColor;
        selectedColor.style.backgroundColor = '#' + rgbColor.toString(16).padStart(6, '0');

        isColorPicked = true;
    }
}

function copyColor() {
    const color = selectedColor.textContent;
    copyTextToClipboard(color);
    alert('Колір скопійовано: ' + color);
}

function copyTextToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
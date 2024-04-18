const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const colorPicker = document.getElementById('colorPicker');
const colorfulContent = document.getElementById('colorful-content');
const textColorPicker = document.getElementById('textColorPicker');
const textSizePicker = document.getElementById('textSizePicker');
const colorfulContent2 = document.getElementById('colorful-content-2');
const colorPicker2 = document.getElementById('colorPicker2');
const textColorPicker2 = document.getElementById('textColorPicker2');
const textSizePicker2 = document.getElementById('textSizePicker2');


function changeTextColor(color) {
    colorfulContent.style.color = color;
}

function changeTextSize(size) {
    colorfulContent.style.fontSize = size + 'px';
}

colorPicker.addEventListener('input', function() {
    const color = this.value;
    colorfulContent.style.backgroundColor = color;
});

textColorPicker.addEventListener('input', function() {
    const color = this.value;
    changeTextColor(color);
});

textSizePicker.addEventListener('input', function() {
    const size = this.value;
    changeTextSize(size);
});

content.addEventListener('click', function(event) {
    if (!event.target.closest('#sidebar')) {
        sidebar.classList.add('open');
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    sidebar.classList.remove('open');
});

function changeBackgroundColor(color) {
    colorfulContent2.style.backgroundColor = color;
}

function changeTextColor2(color) {
    colorfulContent2.style.color = color;
}

function changeTextSize2(size) {
    colorfulContent2.style.fontSize = size + 'px';
}

colorPicker2.addEventListener('input', function() {
    const color = this.value;
    changeBackgroundColor(color);
});

textColorPicker2.addEventListener('input', function() {
    const color = this.value;
    changeTextColor2(color);
});

textSizePicker2.addEventListener('input', function() {
    const size = this.value;
    changeTextSize2(size);
});

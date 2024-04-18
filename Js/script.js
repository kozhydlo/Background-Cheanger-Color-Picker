document.addEventListener("DOMContentLoaded", function() {
    const welcomeElement = document.getElementById('welcome');
    const modal = document.getElementById('modal');
    const saveUsernameBtn = document.getElementById('saveUsernameBtn');
    const usernameInput = document.getElementById('usernameInput');

    showPersonalCabinet(welcomeElement, modal, saveUsernameBtn, usernameInput);
});

function showPersonalCabinet(welcomeElement, modal, saveUsernameBtn, usernameInput) {
    const username = localStorage.getItem('username');

    if (username) {
        welcomeElement.textContent = `Доброго дня, ${username}!`;
        modal.style.display = 'none'; 
    } else {
        modal.style.display = 'block';

        saveUsernameBtn.addEventListener('click', function() {
            const username = usernameInput.value.trim();
            if (username !== '') {
                localStorage.setItem('username', username);
                welcomeElement.textContent = `Доброго дня, ${username}!`;
                modal.style.display = 'none';
            } else {
                alert('Будь ласка, введіть своє ім\'я');
            }
        });
    }

}

document.addEventListener("DOMContentLoaded", function() {
    const colorTableBody = document.getElementById('colorTableBody');
    displaySavedColors(colorTableBody);
});

function displaySavedColors(colorTableBody) {
    const savedColors = JSON.parse(localStorage.getItem('savedColors')) || [];

    colorTableBody.innerHTML = '';

    savedColors.forEach(function(color) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.style.backgroundColor = color; 
        cell.textContent = color; 
        row.appendChild(cell); 
        colorTableBody.appendChild(row); 
    });
}

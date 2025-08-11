document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        const targetID = button.getAttribute('data-id');
        const hiddenBlock = document.querySelector(`.block-${targetID}`);

        button.addEventListener('click', function () {
            // Проверяем действительное значение стиля
            const currentDisplay = window.getComputedStyle(hiddenBlock).display;

            if (currentDisplay === 'none') {
                hiddenBlock.style.display = 'block';
                button.textContent = `▲`;
            } else {
                hiddenBlock.style.display = 'none';
                button.textContent = `▼`;
            }
        });
    });
});


// Функция открытия модального окна
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Функция закрытия модального окна
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
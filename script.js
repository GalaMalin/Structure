// Функция раскрытия структуры блока по кнопке стрелка
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        const blockId = button.getAttribute('data-id');
        const hiddenBlock = document.querySelector(`.block-${blockId}`);

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


// Функция открытия всех стрелок

    // Новая функциональность: открыть/закрыть все блоки
    const ALL_COUNT = 14; // всего скрытых блоков на странице
    const openAllBtn = document.getElementById('toggle-all-btn');
    let allOpen = false; // текущее состояние: открыто ли все

    // Функция открывает все скрытые блоки и синхронизирует кнопки стрелок
    function openAllBlocks() {
        for (let i = 1; i <= ALL_COUNT; i++) {
            const block = document.querySelector(`.block-${i}`);
            if (block) {
                // если блок скрыт, открыть
                const currentDisplay = window.getComputedStyle(block).display;
                if (currentDisplay === 'none') {
                    block.style.display = 'block';
                }
                // если есть связанная кнопка для этого блока, обновим её текст
                const relatedButton = document.querySelector(`.toggle-button[data-id="${i}"]`);
                if (relatedButton) {
                    relatedButton.textContent = `▲`;
                }
            }
        }
        allOpen = true;
        openAllBtn.textContent = 'Закрыть все';
    }

    // Функция закрывает все блоки
    function closeAllBlocks() {
        for (let i = 1; i <= ALL_COUNT; i++) {
            const block = document.querySelector(`.block-${i}`);
            if (block) {
                // если блок открыт, скрыть
                const currentDisplay = window.getComputedStyle(block).display;
                if (currentDisplay !== 'none') {
                    block.style.display = 'none';
                }
                // обновим текст соответствующей кнопки
                const relatedButton = document.querySelector(`.toggle-button[data-id="${i}"]`);
                if (relatedButton) {
                    relatedButton.textContent = '▼';
                }
            }
        }
        allOpen = false;
        openAllBtn.textContent = 'Раскрыть все';
    }

    // Обработчик клика по кнопке "Открыть все"/"Закрыть все"
    openAllBtn.addEventListener('click', function () {
        if (!allOpen) {
            openAllBlocks();
        } else {
            closeAllBlocks();
        }
    });

    // Если на странице могут быть уже открытые блоки,
    // можно скорректировать начальное состояние кнопки:
    // если хотя бы один блок открыт, можно установить allOpen = true и текст кнопки    
    
    let anyOpen = false;
    for (let i = 1; i <= ALL_COUNT; i++) {
        const block = document.querySelector(`.block-${i}`);
        if (block && window.getComputedStyle(block).display !== 'none') {
            anyOpen = true;
            break;
        }
    }
    allOpen = anyOpen;
    openAllBtn.textContent = anyOpen ? 'Закрыть все' : 'Раскрыть все';
    
});





/* // Связывание блоков с кнопками
const blocksMapping = {
    '1': '.hidden-block-1',
    '2': '.hidden-block-2',
    '3': '.hidden-block-3',
    '4': '.hidden-block-4',
    '5': '.hidden-block-5',
    '6': '.hidden-block-6',
    '7': '.hidden-block-7',
    '8': '.hidden-block-8',
    '9': '.hidden-block-9',
    '10': '.hidden-block-10',
    '11': '.hidden-block-11',
    '12': '.hidden-block-12',
    '13': '.hidden-block-13',
    '14': '.hidden-block-14',
};

// Функция открытия всех блоков
function showAllBlocks() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(btn => {
        const blockId = btn.getAttribute('data-id');
        const relatedBlock = document.querySelector(blocksMapping[blockId]);

        if (relatedBlock) {
            relatedBlock.style.display = 'block';
            btn.textContent = '▲'; // Поменяли стрелку на закрытие
        }
    });

    // Переключаем видимость кнопок
    document.getElementById('showAllButton').style.display = 'none';
    document.getElementById('hideAllButton').style.display = 'inline-block';
}

// Функция закрытия всех блоков
function hideAllBlocks() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(btn => {
        const blockId = btn.getAttribute('data-id');
        const relatedBlock = document.querySelector(blocksMapping[blockId]);

        if (relatedBlock) {
            relatedBlock.style.display = 'none';
            btn.textContent = '▼'; // Вернули стрелку на открытие
        }
    });

    // Переключаем видимость кнопок
    document.getElementById('showAllButton').style.display = 'inline-block';
    document.getElementById('hideAllButton').style.display = 'none';
}

// Прикрепляем события к кнопкам
document.getElementById('showAllButton').addEventListener('click', showAllBlocks);
document.getElementById('hideAllButton').addEventListener('click', hideAllBlocks);
*/


// Функция открытия модального окна
/*function openModal() {
    document.getElementById('myModal').style.display = 'block';
}*/

function openModal(button) {
    const infoId = button.getAttribute('data-info-id');
    const selectedItem = modalInfo.find(item => item.id == infoId);

    if (selectedItem) {
        document.getElementById('modalState').innerText = selectedItem.state;
        document.getElementById('modalHead').innerText = selectedItem.head;
        document.getElementById('modalHistory').innerText = selectedItem.history;
        document.getElementById('myModal').style.display = 'block';
    }
}

// Функция закрытия модального окна
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


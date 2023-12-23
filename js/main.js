const elBox = document.getElementById('box');
const elInput = document.getElementById('input')
const elBtn = document.getElementById('btn');
const elSpan = document.getElementById('span');

// ============================= BTN START ============================= //

elBtn.addEventListener('click', () => {
    if (elInput.value <= '30') {
        elSpan.textContent = 'Siz hali yoshsiz';
    } else if (elInput.value <= '60') {
        elSpan.textContent = 'Siz katta ekansiz';
    } else if (elInput.value >= '61') {
        elSpan.textContent = 'Siz qari ekansiz';
    } else if (elInput.value = '') {
        elSpan.textContent = 'Iltimos yoshingizni kiriting';
    }
})

// ============================= BTN END ============================= //
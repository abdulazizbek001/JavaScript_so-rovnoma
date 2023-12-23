const elInput = document.getElementById('input');
const elBtn = document.getElementById('btn');
const elSpan = document.getElementById('span');

// ============================= BTN START ============================= //

elBtn.addEventListener('click', () => {
    if(elInput.value >= '2000') {
        elSpan.textContent = 'Siz XXI asrda tug`ilgansiz';
    } else if(elInput.value <= '999') {
        elSpan.textContent = 'Siz XX asrda tug`ilgansiz';
    }
})

// ============================= BTN END ============================= //
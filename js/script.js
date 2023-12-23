const elInput = document.getElementById('input');
const elBtn = document.getElementById('btn');
const elSpan = document.getElementById('span');
const elOtishBtn = document.getElementById('otish-btn');
const elBox = document.getElementById('box');
const elBox2 = document.getElementById('box-2');


// ============================= 1-AMALIYOT START ============================= //


// ============================= INPUT START ============================= //

elInput.style.marginBottom = '20px';

// ============================= INPUT END ============================= //

// ============================= BTN START ============================= //

elBtn.addEventListener('click', () => {
    if (elInput.value == 'sarimsoqpiyoz') {
        elSpan.textContent = 'Assalomu aleykum';
    } else if (elInput.value == '') {
        elSpan.textContent = 'xato: yana urunib ko`ring!';
    } else if (elInput.value <= 'sarimsoqpiyoz' ) {
        elSpan.textContent = 'xato: yana urunib ko`ring!';
    } 

    elSpan.style.display = 'flex';
})

// ============================= BTN END ============================= //

// ============================= OTISH START ============================= //

elOtishBtn.addEventListener('click', () => {
    elBox2.style.display = 'none';
    elBox.style.display = 'flex';
})

// ============================= OTISH END ============================= //

// ============================= SPAN START ============================= //

elSpan.style.padding = '5px';
elSpan.style.color = 'white';
elSpan.style.backgroundColor = 'red';
elSpan.style.display = 'none';
elSpan.style.width = '200px';

// ============================= SPAN END ============================= //

// ============================= 1-AMALIYOT END ============================= //

// ============================= 2-AMALIYOT START ============================= //


// ============================= BOX START ============================= //

elBox.style.display = 'none';

// ============================= BOX END ============================= //


// ============================= 2-AMALIYOT END ============================= //
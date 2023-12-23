const elInput = document.getElementById('input');
const elBtn = document.getElementById('btn');
const elSpan = document.getElementById('span');

// ============================= BTN START ============================= //

let sum = 12500;
let x = 500;
let y = 250;
let z = 120;
let d = 6250000;
let s = 3125000;
let a = 1500000;
let w = 7750000;
let q = 10875000;

elBtn.addEventListener('click', () => {

    // if (elInput.value <= '18.625.000') {
        elSpan.textContent = `Hurmatli foydalanuvchi sizning pulingizning soni ${18625000 - elInput.value} sum yetmaydi`;
    // }
    if (elInput.value >= 18625000) {
        elSpan.textContent = `Hurmatli foydalanuvchi siz safarga chiqishingiz mumkin `;
    }
})

// ============================= BTN END ============================= //
function appendNumber(number) {
    const display = document.getElementById('display');
    const resultDisplay = document.getElementById('result-display');
    
    // Jika hasil sedang ditampilkan, sembunyikan terlebih dahulu
    resultDisplay.style.visibility = 'hidden';
    display.value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result-display').style.visibility = 'hidden'; // Sembunyikan hasil
}

function calculate() {
    const display = document.getElementById('display');
    const resultDisplay = document.getElementById('result-display');

    // Kosongkan display kalkulator
    display.value = '';

    // Tampilkan angka 45 dengan emoji api
    resultDisplay.innerHTML = '45 <span class="fire-emoji">🔥</span>';
    resultDisplay.style.visibility = 'visible'; // Tampilkan hasil dengan animasi
}

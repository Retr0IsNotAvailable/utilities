let calculation = (localStorage.getItem('calculation') || '');

function displayCalculation(calculation) {
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}

function calculateValue(calculation, value) {
    calculation += value;
    displayCalculation(calculation);
    return calculation;
}

displayCalculation(calculation);

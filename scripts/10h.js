function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    if (cost < 0) {
        return  document.querySelector('.js-total-cost')
            .innerHTML = '<span style="color: red">Error: You so dumb, fr</span>';
    }
    if ((cost * 100) < 4000) {
        cost = ((cost * 100) + 1000) / 100;
    }

    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
}

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}
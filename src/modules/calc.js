const calc = () => {
    const cardOrder = document.querySelector('#card_order');
    const time = cardOrder.querySelector('.time');
    if (!time) return;
    const club = cardOrder.querySelectorAll('.club>input');
    const priceTotal = cardOrder.querySelector('#price-total');
    const promocod = cardOrder.querySelector('.input-text>input');
    const schelkovo = [2999, 14990, 21990, 24990];
    const mozaika = [1999, 9900, 13900, 19900];
    const timeInput = time.querySelectorAll('input');
    const sum = () => {
        club.forEach((item) => {
            if (item.checked) {
                if (item.value === 'schelkovo') {
                    timeInput.forEach((item, index) => {
                        if (item.checked) {
                            priceTotal.textContent = schelkovo[index];
                        }
                    });
                    promo();
                } else if (item.value === 'mozaika') {
                    timeInput.forEach((item, index) => {
                        if (item.checked) {
                            priceTotal.textContent = mozaika[index];
                        }
                    });
                    promo();
                }
            }
        });
    };
    cardOrder.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.time')) {
            sum();
        } else if (target === club[0]) {
            timeInput.forEach((item, index) => {
                if (item.checked) {
                    priceTotal.textContent = mozaika[index];
                }
            });
            promo();
        } else if (target === club[1]) {
            timeInput.forEach((item, index) => {
                if (item.checked) {
                    priceTotal.textContent = schelkovo[index];
                }
            });
            promo();
        }

    });
    const promo = () => {
        if (promocod.value.trim() === 'ТЕЛО2020') {
            priceTotal.textContent =
                Math.ceil(+priceTotal.textContent - (+priceTotal.textContent * 0.30));
        }
    }
    promocod.addEventListener('change', promo);


    // console.log(club[0].checked.value);
};

export default calc;
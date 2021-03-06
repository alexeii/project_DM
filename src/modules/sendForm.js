const sendForm = () => {
    const form = document.querySelectorAll('form');
    const popupThanks = document.querySelector('#thanks');
    const textMessage = popupThanks.querySelector('.form-content>p');
    const freeVisitForm = document.querySelector("#free_visit_form");
    const callbackForm = document.querySelector("#callback_form");
    const cardOrder = document.querySelector("#card_order");
    const cardOrderCheck = cardOrder.querySelectorAll("input[name ='club-name']");
    const cardOrderRadio = cardOrder.querySelectorAll("input[type='radio']");
    const checkboxInput = document.querySelectorAll("input[type='checkbox']");
    const footerForm = document.querySelector("#footer_form");
    const footerRadio = footerForm.querySelectorAll("input[type='radio']");
    const priceTotal = cardOrder.querySelector('#price-total');
    const promocod = cardOrder.querySelector('.input-text>input');

    const statusMessage = document.createElement("div");
    statusMessage.textContent = "Подтвердите согласие на обработку данных.";
    statusMessage.style.color = 'red';
    const errorMessage = "Что то пошло не так...";
    const loadMessage = "Идёт отправка...";
    const successMessage = "Ваша заявка отправлена.<br />Мы свяжемся с вами в ближайшее время.";
    let count = 0;
    let interval;




    form.forEach((item) => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            if (item.querySelector("input[type='checkbox']")) {
                if (!item.querySelector("input[type='checkbox']").checked) {
                    item.querySelector(".personal-data").append(statusMessage);
                    const message = () => {
                        if (statusMessage.textContent !== '!!!!') {
                            statusMessage.textContent = '!!!!';

                        } else if (statusMessage.textContent === '!!!!') {
                            statusMessage.textContent = "Подтвердите согласие на обработку данных.";

                        }
                    };
                    interval = setInterval(() => {
                        count++;
                        if (count === 8) {
                            clearInterval(interval);
                            statusMessage.remove();
                            count = 0;
                        } else {
                            message();
                        }
                    }, 800);


                    return;
                }
            }
            popupThanks.style.display = "block";
            freeVisitForm.style.display = "none";
            callbackForm.style.display = "none";
            textMessage.textContent = loadMessage;
            const formData = new FormData(item);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            if (promocod) {
                body[promocod.getAttribute('name')] = promocod.value;
            }
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error("status network not 200");
                    }
                    textMessage.innerHTML = successMessage;
                    event.target.querySelectorAll("input").forEach((item) => {
                        item.value = "";
                    });
                    if (cardOrderCheck) {
                        cardOrderCheck.forEach((item) => {
                            item.checked = false;
                        });
                        if (cardOrderCheck[0]) {
                            cardOrderCheck[0].checked = true;
                            priceTotal.textContent = 1999;
                        }

                    }
                    cardOrderRadio[0].checked = true;
                    footerRadio.forEach((item) => {
                        item.checked = false;
                    });
                    checkboxInput.forEach((item) => {
                        item.checked = false;
                    });
                    const timer = () => (popupThanks.style.display = "none");
                    setTimeout(timer, 2500);
                })
                .catch((error) => {
                    textMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
    });
    const postData = (body) =>
        fetch("./server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
};

export default sendForm;
const sendForm = () => {
    const form = document.querySelectorAll('form');
    const popupThanks = document.querySelector('#thanks');
    const textMessage = popupThanks.querySelector('.form-content>p');
    const freeVisitForm = document.querySelector("#free_visit_form");
    const callbackForm = document.querySelector("#callback_form");
    const errorMessage = "Что то пошло не так...";
    const loadMessage = "Идёт отправка...";
    const successMessage = "Ваша заявка отправлена.<br />Мы свяжемся с вами в ближайшее время.";


    form.forEach((item) => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            popupThanks.style.display = "block";
            freeVisitForm.style.display = "none";
            callbackForm.style.display = "none";
            textMessage.textContent = loadMessage;
            const formData = new FormData(item);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error("status network not 200");
                    }
                    textMessage.innerHTML = successMessage;
                    event.target.querySelectorAll("input").forEach((item) => {
                        item.value = "";
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
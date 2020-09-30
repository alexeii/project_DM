const toggleModal = () => {
    const clubList = document.querySelector(".clubs-list>p");
    const clubsListUl = document.querySelector(".clubs-list>ul");
    const freeVisitForm = document.querySelector("#free_visit_form");
    const callbackForm = document.querySelector("#callback_form");
    const fixedGift = document.querySelector(".fixed-gift>img");
    const giftForm = document.querySelector("#gift");
    const popupThanks = document.querySelector('#thanks');
    const callButton = document.querySelector('.call>button');
    document.addEventListener("click", (event) => {
        const target = event.target;
        //выбрать клуб
        if (target === clubList) {
            clubsListUl.style.display =
                clubsListUl.style.display !== "block" ? "block" : "none";
        }
        //записаться на бесплатный визит вывод формы
        if (target.dataset.popup === "#free_visit_form") {
            freeVisitForm.style.display = "block";
        } else if (
            target.matches(".close_icon") ||
            !target.closest(".form-content")
        ) {
            freeVisitForm.style.display = "none";
        }
        //перезвоните мне вывод формы
        if (target === callButton) {
            callbackForm.style.display = "block";
        } else if (
            target.matches(".close_icon") ||
            !target.closest(".form-content")
        ) {
            callbackForm.style.display = "none";
        }
        //подарок вывод формы
        if (fixedGift) {
            if (fixedGift === target) {
                giftForm.style.display = "block";
                fixedGift.style.display = "none";
            } else if (
                target.matches(".close_icon") ||
                !target.closest(".form-content") ||
                target.matches(".close-btn")
            ) {
                giftForm.style.display = "none";
            }
        }
        if (target.matches(".close_icon") ||
            !target.closest(".form-content") ||
            target.matches(".close-btn")) {
            popupThanks.style.display = "none";
        }
    });
};
export default toggleModal;
const toggleModal = () => {
    const clubList = document.querySelector(".clubs-list>p");
    const clubsListUl = document.querySelector(".clubs-list>ul");
    const freeVisitForm = document.querySelector("#free_visit_form");
    const callbackForm = document.querySelector("#callback_form");
    const fixedGift = document.querySelector(".fixed-gift>img");
    const giftForm = document.querySelector("#gift");
    document.addEventListener("click", (event) => {
        const target = event.target;
        //выбрать клуб
        if (target !== clubList && target !== clubsListUl) {
            clubsListUl.style.display = "none";
        } else if (target === clubList) {
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
        if (target.dataset.popup === "#callback_form") {
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
                !target.closest(".form-content")
            ) {
                giftForm.style.display = "none";
            }
        }
    });
};
export default toggleModal;
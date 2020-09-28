const validateForm = () => {
    const userNameValid = document.querySelectorAll("input[type='text']");
    const userPhoneValid = document.querySelectorAll("input[type='tel']");
    //валидация
    for (let i = 0; i < userNameValid.length; i++) {

        if (i !== 1) {
            userNameValid[i].addEventListener("keyup", () => {
                userNameValid[i].value = userNameValid[i].value.replace(/[^а-я ]/gi, "");
            });
        } else {
            userNameValid[i].addEventListener("keyup", () => {
                userNameValid[i].value = userNameValid[i].value.replace(/[^а-яА-Я0-9]/g, "");
            });
        }

    };

    userPhoneValid.forEach((item) => {
        item.maxLength = 12;
        item.addEventListener("keyup", () => {
            item.value = item.value.replace(/[^\d\+]/g, "");
        });
    });

};

export default validateForm;
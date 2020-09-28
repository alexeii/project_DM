const validateForm = () => {
  const userNameValid = document.querySelectorAll("input[type='text']");
  const userPhoneValid = document.querySelectorAll("input[type='tel']");
  userNameValid.forEach((item) => {
    item.addEventListener("keyup", () => {
      item.value = item.value.replace(/[^а-я ]/gi, "");
    });
  });
  userPhoneValid.forEach((item) => {
    item.maxLength = 12;
    item.addEventListener("keyup", () => {
      item.value = item.value.replace(/[^\d\+]/g, "");
    });
  });
};

export default validateForm;

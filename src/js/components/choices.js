const selectShoices = () => {
  const element = document.querySelector(".form__select");
  const choices = new Choices(element, {
    position: "bottom",
    placeholder: false,
    placeholderValue: false,
    searchPlaceholderValue: false,
    searchEnabled: false,
    itemSelectText: "",
  });
};
selectShoices();

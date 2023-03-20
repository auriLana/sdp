(function () {
const host = "https://lansvetyk.github.io/SitDownPls_prod/";
// JAVASCRIPT FOR INDEX PAGE
if (window.location.href == host + 'index.html' || window.location.href == host) {
  document.addEventListener("DOMContentLoaded", () => {
    const $form = document.getElementById("form");
    const regExpName = /^[А-Яа-яЁё\s-]{2,18}$/;
    const regExpPhone = /^[\d\+][\d\(\)\ -]{9,14}\d$/;
    const regExpEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    function validation(form) {
      function removeError(input) {
        const parents = input.parentNode;

        if (parents.classList.contains("error")) {
          parents.querySelector(".error-label").remove();
          parents.classList.remove("error");
        }
      }
      let result = true;

      function createError(input, text) {
        const parents = input.parentNode;
        const errorLabel = document.createElement("label");

        errorLabel.classList.add("error-label");
        errorLabel.textContent = text;
        parents.prepend(errorLabel);
        parents.classList.add("error");
      }

      const allInputs = $form.querySelectorAll("input");
      for (const input of allInputs) {
        if (input.value == "") {
          removeError(input);
          createError(input, "Заполните поле!");
          result = false;
        }
        if (input.name == "name") {
          removeError(input);
          if (!regExpName.test(input.value)) {
            createError(
              input,
              "Введите имя на русском языке от 2 до 18 символов"
            );
            result = false;
          }
        }
        if (input.name == "phone") {
          removeError(input);
          if (!regExpPhone.test(input.value)) {
            createError(input, "Введите номер телефона");
            result = false;
          }
        }
        if (input.name == "email") {
          removeError(input);
          if (!regExpEmail.test(input.value)) {
            createError(input, "Введите email");
            result = false;
          }
        }
      }
      return result;
    }
    const searchInputText = $form.querySelector('input[type="text"]');
    searchInputText.addEventListener("keypress", (event) => {
      let regExp = /[а-яА-Я\s-]/;
      if (event.key.match(regExp)) {
        return null;
      } else {
        event.preventDefault();
      }
    });
    searchInputText.addEventListener("blur", () => {
      let correctInput = field.value.trim();
      while (correctInput.indexOf("-") === 0) {
        correctInput = correctInput.slice(1);
      }
      while (correctInput.substring(correctInput.length - 1) === "-") {
        correctInput = correctInput.slice(0, -1);
      }
      correctInput = correctInput.replace(/-+/g, "-");
      correctInput = correctInput.replace(/\s+/g, " ");
      correctInput =
        correctInput.substring(0, 1).toUpperCase() +
        correctInput.substring(1, correctInput.length).toLowerCase();
      field.value = correctInput;
    });
    $form.addEventListener("submit", (el) => {
      el.preventDefault();

      if (validation($form)) {
        alert("Форма отправлена!");
        $form.querySelectorAll(".form input").forEach((elem) => {
          elem.value = "";
        });
      }
    });
  });
}
})();



document.addEventListener("DOMContentLoaded", function () {
const host = "https://lansvetyk.github.io/SitDownPls_prod/";
// JAVASCRIPT FOR INDEX PAGE
if (window.location.href == host + "catalog.html") {
  const selectCategoria = document.getElementById("categoria");
  const selectPrice = document.getElementById("price");
  const selectSale = document.getElementById("sale");
  const selectColor = document.getElementById("color");
  const listSelect = document.querySelectorAll(".list__select-css");
  const arrowSelectCategoria = selectCategoria.firstElementChild;
  const arrowSelectPrice = selectPrice.firstElementChild;
  const arrowSelectSale = selectSale.firstElementChild;
  const arrowSelectColor = selectColor.firstElementChild;
  const catalogFilters = document.querySelectorAll(".list__checkboxes, .block");

  // select categoria
  function checkboxesOpenCat() {
    const checkCat = document.getElementById("check-categoria");
    if (checkCat.classList.contains("block")) {
      checkCat.classList.add("none");
      checkCat.classList.remove("block");
      arrowSelectCategoria.classList.add("arrow-app");
    } else {
      checkCat.classList.remove("none");
      checkCat.classList.add("block");
      arrowSelectCategoria.classList.remove("arrow-app");
    }
  }
  selectCategoria.addEventListener("click", () => {
    checkboxesOpenCat();
  });

  // select price
  const checkPrice = document.getElementById("check-price");

  const rangeSlider = document.getElementById("range-slider");
  if (document.documentElement.clientWidth < 1190) {
    checkPrice.classList.add("column");
    checkPrice.firstElementChild.style.marginBottom = "10px";
  }
  function checkboxesOpenPrice() {
    if (checkPrice.classList.contains("flex")) {
      checkPrice.classList.add("none");
      checkPrice.classList.remove("flex");
      rangeSlider.classList.add("none");
      arrowSelectPrice.classList.add("arrow-app");
    } else {
      checkPrice.classList.remove("none");
      checkPrice.classList.add("flex");
      rangeSlider.classList.remove("none");
      arrowSelectPrice.classList.remove("arrow-app");
    }
  }
  selectPrice.addEventListener("click", () => {
    checkboxesOpenPrice();
  });

  // select sale
  function checkboxesOpenSale() {
    const checkSale = document.getElementById("check-sale");
    if (checkSale.classList.contains("block")) {
      checkSale.classList.add("none");
      checkSale.classList.remove("block");
      arrowSelectSale.classList.add("arrow-app");
    } else {
      checkSale.classList.remove("none");
      checkSale.classList.add("block");
      arrowSelectSale.classList.remove("arrow-app");
    }
  }

  selectSale.addEventListener("click", () => {
    checkboxesOpenSale();
  });
  // select color
  function checkboxesOpenColor() {
    const checkColor = document.getElementById("check-color");
    if (checkColor.classList.contains("block")) {
      checkColor.classList.add("none");
      checkColor.classList.remove("block");
      arrowSelectColor.classList.add("arrow-app");
    } else {
      checkColor.classList.remove("none");
      checkColor.classList.add("block");
      arrowSelectColor.classList.remove("arrow-app");
    }
  }
  selectColor.addEventListener("click", () => {
    checkboxesOpenColor();
  });

  if (document.documentElement.clientWidth < 1190) {
    checkPrice.classList.add("column");
    checkPrice.firstElementChild.style.marginBottom = "10px";
    catalogFilters.forEach((element) => {
      if (element.classList.contains("block")) {
        element.classList.remove("block");
        element.classList.add("none");
        listSelect.forEach((el) => {
          el.classList.add("arrow-app");
        });
      }
      if (element.classList.contains("flex")) {
        element.classList.remove("flex");
        element.classList.add("none");
        rangeSlider.classList.add("none");
        listSelect.forEach((el) => {
          el.classList.remove("arrow-app");
        });
      }
    });
  }
}
});

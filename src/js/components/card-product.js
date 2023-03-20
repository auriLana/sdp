const modalBox = () => {
  const cardProduct = document.querySelectorAll(".card-product__item");
  const modalWin = document.querySelector(".modal");
  const closeWin = document.querySelector(".modal__close");

  cardProduct.forEach((el) => {
    el.addEventListener("click", () => {
      modalWin.classList.add("open");
    });

    closeWin.addEventListener("click", () => {
      modalWin.classList.remove("open");
    });
  });
};
modalBox();

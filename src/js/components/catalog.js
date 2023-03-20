(function () {
  const host = "https://lansvetyk.github.io/SitDownPls_prod/";
  // JAVASCRIPT FOR INDEX PAGE
  if (
    window.location.href == host + "catalog.html" ||
    window.location.href == host
  ) {
    document.addEventListener("DOMContentLoaded", () => {
      const paginationBtn = document.querySelectorAll(".pagination__item");
      const catalogItem = document.querySelectorAll(".catalog__item");
      // alert(document.documentElement.clientWidth);
      let arrayCatalogItem = Array.prototype.slice.call(catalogItem);
      arrayCatalogItem.slice(9, 18).forEach((elem) => {
        elem.classList.add("none-visibility");
      });
      if (document.documentElement.clientWidth < 1190) {
        const filtersTitle = document.querySelector(".filters__title");
        filtersTitle.textContent = "Фильтры:";
      }
      if (document.documentElement.clientWidth < 979) {
        arrayCatalogItem.slice(6, 18).forEach((elem) => {
          if (!elem.classList.contains("none-visibility")) {
            elem.classList.add("none-visibility");
          }
        });
      }

      paginationBtn.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          let strNumber = e.currentTarget.dataset.number;
          if (strNumber == 1) {
            if (
              !e.currentTarget.classList.contains("pagination__item--active")
            ) {
              paginationBtn.forEach((el) => {
                el.classList.remove("pagination__item--active");
              });
              e.currentTarget.classList.add("pagination__item--active");
            }
            if (document.documentElement.clientWidth > 979) {
              arrayCatalogItem.slice(9, 18).forEach((elem) => {
                elem.classList.add("none-visibility");
              });
              arrayCatalogItem.slice(0, 9).forEach((elem) => {
                elem.classList.remove("none-visibility");
              });
            } else if (document.documentElement.clientWidth < 979) {
              arrayCatalogItem.slice(6, 18).forEach((elem) => {
                elem.classList.add("none-visibility");
              });
              arrayCatalogItem.slice(0, 6).forEach((elem) => {
                elem.classList.remove("none-visibility");
              });
            }
          }
          if (strNumber == 2) {
            if (
              !e.currentTarget.classList.contains("pagination__item--active")
            ) {
              paginationBtn.forEach((el) => {
                el.classList.remove("pagination__item--active");
              });
              e.currentTarget.classList.add("pagination__item--active");
            }
            if (document.documentElement.clientWidth > 979) {
              arrayCatalogItem.slice(9, 18).forEach((elem) => {
                elem.classList.remove("none-visibility");
              });
              arrayCatalogItem.slice(0, 9).forEach((elem) => {
                elem.classList.add("none-visibility");
              });
            } else if (document.documentElement.clientWidth < 979) {
              arrayCatalogItem.slice(0, 6).forEach((elem) => {
                elem.classList.add("none-visibility");
              });
              arrayCatalogItem.slice(6, 12).forEach((elem) => {
                elem.classList.remove("none-visibility");
              });
              arrayCatalogItem.slice(12, 18).forEach((elem) => {
                elem.classList.add("none-visibility");
              });
            }
          }
          if (strNumber == 3) {
            if (
              !e.currentTarget.classList.contains("pagination__item--active")
            ) {
              paginationBtn.forEach((el) => {
                el.classList.remove("pagination__item--active");
              });
              e.currentTarget.classList.add("pagination__item--active");
            }
            if (document.documentElement.clientWidth > 979) {
              e.currentTarget.classList.add("none-visibility");
            } else if (document.documentElement.clientWidth < 979) {
              arrayCatalogItem.slice(12, 18).forEach((elem) => {
                elem.classList.remove("none-visibility");
              });
              arrayCatalogItem.slice(0, 12).forEach((elem) => {
                elem.classList.add("none-visibility");
              });
            }
          }
        });
      });
    });
  }
})();

(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("#nav-burger");
  const menuLinks = document.querySelectorAll(".nav__list");

  burger.addEventListener("click", function () {
    if (!burger.classList.contains("burger-active")) {
      burger.classList.add("burger-active");
      menu.classList.add("nav__list-open");
      document.body.classList.add("stop-scroll");
    } else {
      burger.classList.remove("burger-active");
      menu.classList.remove("nav__list-open");
      document.body.classList.remove("stop-scroll");
    }
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.remove("burger-active");
      menu.classList.remove("nav__list-open");
      document.body.classList.remove("stop-scroll");
    });
  });
})();

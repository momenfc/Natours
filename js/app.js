let i = 10;
document.querySelector(".composition").addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("composition__photo")) {
    i++;
    e.target.style.zIndex = i;
  }
});

(function navListener() {
  const navLinks = document.querySelectorAll(".navigation-nav__link");
  const closeNavBtn = document.querySelector(".navigation__button");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavBtn.click();
    });
  });
})();

(function popupListener() {
  const popup = document.querySelector(".popup"),
    popupCloseBtn = document.querySelector(".popup__close");
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      popupCloseBtn.click();
    }
  });
})();

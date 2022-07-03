const items = document.querySelectorAll(".header__list-item");
items.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown")) {
      let self = e.currentTarget;
      let item = self.querySelector(".header__sub-list");
      item.classList.toggle("hidden");
    }
  });
});

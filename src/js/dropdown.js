document.addEventListener("click", (e) => {
  let self = e.target;
  if (self.closest(".header__list-item")) {
    let parent = self.closest(".header__list-item");
    if (parent.classList.contains("dropdown")) {
      let item = parent.querySelector(".header__sub-list");
      if (item.classList.contains("hidden")) {
        const headerSubList = document.querySelectorAll(".header__sub-list");
        headerSubList.forEach((el) => {
          el.classList.add("hidden");
        });
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  } else if (!self.closest(".header__list-item")) {
    const headerSubList = document.querySelectorAll(".header__sub-list");
    headerSubList.forEach((el) => {
      if (!el.classList.contains("hidden")) {
        el.classList.add("hidden");
      }
    });
  }
});

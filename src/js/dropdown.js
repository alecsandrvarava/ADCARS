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
const dropdown = document.querySelectorAll(".dropdown");
if (dropdown) {
  dropdown.forEach((element) => {
    element.insertAdjacentHTML(
      "beforeend",
      `<span class="header__arrow">
					<svg  viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.5 9L0.73686 0.75L10.2631 0.75L5.5 9Z" fill="white"/>
					</svg>
				</span>`
    );
  });
}

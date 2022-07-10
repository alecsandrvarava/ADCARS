const mask = (selector) => {
  const maskedNodes = document.querySelectorAll(selector);
  function createMask(event) {
    const matrix = " (___) ___ __ __";
    const def = "+38";
    let keyPressed = "";

    const isSmthInInput = this.value.length > def.length;

    if (event.type === "blur" && !isSmthInInput) {
      this.value = "";
      return;
    } else if (event.type === "input") {
      keyPressed = event.data;
    }

    let val = isSmthInInput
      ? this.value.slice(0, def.length) === def
        ? this.value.slice(def.length).replace(/\D/g, "")
        : (keyPressed + this.value.slice(def.length + 1)).replace(/\D/g, "")
      : "";
    console.log(val);
    let i = 0;

    this.value =
      def +
      matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });
  }

  maskedNodes.forEach((node) => {
    node.addEventListener("input", createMask);
    node.addEventListener("focus", createMask);
    node.addEventListener("blur", createMask);
  });
};
mask('[name="phone"]');

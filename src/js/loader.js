const loaderEl = document.querySelector(".loader");

const loaderToggler = (info) => {
  if (info) {
    loaderEl.classList.remove("hidden");
  } else {
    loaderEl.classList.add("hidden");
  }
};

export default loaderToggler;

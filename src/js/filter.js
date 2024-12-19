import { createCountries } from "./updateUI";
import request from "./request";

const searchFormEl = document.querySelector(".search");

searchFormEl.search.addEventListener("input", () => {
  const searchValue = searchFormEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitle = document.querySelectorAll(".card__title");
  cardsTitle.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchselectSpan = document.querySelector(".search__select span");

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchselectSpan.textContent = li.textContent;
    let filterApi;
    if (li.textContent == "All") {
      filterApi = "https://restcountries.com/v3.1/all"; // filterdagi All ni bosganda!
    } else {
      filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }

    request(filterApi)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });
});

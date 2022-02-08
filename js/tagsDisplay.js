const ingTag = document.getElementsByClassName("ingTag");
const appTag = document.getElementsByClassName("appTag");
const ustTag = document.getElementsByClassName("ustTag");
const cards = document.getElementsByClassName("cards");
const infoSearch = document.getElementsByClassName("infoSearch");
const searchBar = document.getElementsByClassName("searchBar");
let ingResults = [];
let appResults = [];
let ustResults = [];
let results = [];
let values = [];
let values1 = [];
let values2 = [];
import RecipesList from "./recipesList.js";

const ingTagFunc = (data) => {
  results = [];
  data.map((ing) => {
    ing.ingredients.map((item) => {
      if (
        item.ingredient
          .toLowerCase()
          .includes(ingTag[0].innerText.toLowerCase())
      ) {
        results.push(ing);
      }
    });
  });
};
const appTagFunc = (data) => {
  appResults = [];
  data.map((item) => {
    if (
      item.appliance.toLowerCase().includes(appTag[0].innerText.toLowerCase())
    ) {
      appResults.push(item);
    }
  });
};
const ustTagFunc = (data) => {
  ustResults = [];
  data.map((item) => {
    item.ustensils.map((ust) => {
      if (ust.toLowerCase().includes(ustTag[0].innerText.toLowerCase())) {
        ustResults.push(item);
      }
    });
  });
};
export default class TagFilterDisplay {
  constructor(searchData) {
    let dataFilter = searchData;
    window.addEventListener("click", (e) => {
      if (e.target.classList.value == "tag_ing") {
        ingTagFunc(searchData);
        if (dataFilter != "") {
          values = dataFilter;
          dataFilter = dataFilter.filter((value) => results.includes(value));
        } else {
          dataFilter = values.filter((value) => results.includes(value));
        }
      }
      if (e.target.classList.value === "far fa-times-circle 1") {
        dataFilter = values.concat(dataFilter);
      }

      if (e.target.classList.value == "tag_app") {
        appTagFunc(searchData);
        if (dataFilter != "") {
          values1 = dataFilter;
          dataFilter = dataFilter.filter((value) => appResults.includes(value));
        } else {
          dataFilter = values1.filter((value) => appResults.includes(value));
        }
      }
      if (e.target.classList.value === "far fa-times-circle 2") {
        dataFilter = values1.concat(dataFilter);
      }

      if (e.target.classList.value == "ust_app") {
        ustTagFunc(searchData);
        if (dataFilter != "") {
          values2 = dataFilter;
          dataFilter = dataFilter.filter((value) => ustResults.includes(value));
        } else {
          dataFilter = values2.filter((value) => ustResults.includes(value));
        }
      }
      if (e.target.classList.value === "far fa-times-circle 3") {
        dataFilter = values2.concat(dataFilter);
      }
      if (
        e.target.classList.value === "tag_ing" ||
        e.target.classList.value === "tag_app" ||
        e.target.classList.value === "ust_app" ||
        e.target.classList.value === "far fa-times-circle 1" ||
        e.target.classList.value === "far fa-times-circle 2" ||
        e.target.classList.value === "far fa-times-circle 3"
      ) {
        if (dataFilter == "") {
          infoSearch[0].classList.remove("displaynone");
        } else {
          infoSearch[0].classList.add("displaynone");
        }

        cards[0].innerHTML = "";
        [...new Set(dataFilter)].map((item) => {
          cards[0].innerHTML += new RecipesList().card(item);
        });
      }
    });
  }
}

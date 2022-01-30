const searchBar = document.getElementsByClassName("searchBar");
const cards = document.getElementsByClassName("cards");
const infoSearch = document.getElementsByClassName("infoSearch");
import recipesData from "./recipesData.js";
import RecipesList from "./recipesList.js";
import TagFilterDisplay from "./tagsDisplay.js";
let results = [];

export default class MainSearch {
  constructor() {
    searchBar[0].addEventListener("keyup", (e) => {
      if (searchBar[0].value.length >= 3) {
        results = [];
        recipesData.map((item) => {
          if (
            item.name
              .toLowerCase()
              .includes(searchBar[0].value.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(searchBar[0].value.toLowerCase())
          ) {
            results.push(item);
          }
          item.ingredients.map((ing) => {
            if (
              ing.ingredient
                .toLowerCase()
                .includes(searchBar[0].value.toLowerCase())
            ) {
              results.push(item);
            }
          });
        });

        cards[0].innerHTML = "";
        [...new Set(results)].map((item) => {
          cards[0].innerHTML += new RecipesList().card(item);
        });
        new TagFilterDisplay([...new Set(results)]);
        if (results == "") {
          infoSearch[0].classList.remove("displaynone");
        } else {
          infoSearch[0].classList.add("displaynone");
        }
      }
      if (searchBar[0].value === "") {
        cards[0].innerHTML = "";
        recipesData.map((item) => {
          cards[0].innerHTML += new RecipesList().card(item);
        });
      }
    });
    new TagFilterDisplay([...new Set(recipesData)]);
  }
}

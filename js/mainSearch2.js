const searchBar = document.getElementsByClassName("searchBar");
const cards = document.getElementsByClassName("cards");
const infoSearch = document.getElementsByClassName("infoSearch");
import recipesData from "./recipesData.js";
import RecipesList from "./recipesList.js";
import TagFilterDisplay from "./tagsDisplay.js";
let results = [];

export default class MainSearch2 {
  constructor() {
    searchBar[0].addEventListener("keyup", (e) => {
      if (searchBar[0].value.length >= 3) {
        results = [];
        for (let i = 0; i < recipesData.length; i++) {
          if (
            recipesData[i].name
              .toLowerCase()
              .includes(searchBar[0].value.toLowerCase()) ||
            recipesData[i].description
              .toLowerCase()
              .includes(searchBar[0].value.toLowerCase())
          ) {
            results.push(recipesData[i]);
          }
          for (let y = 0; y < recipesData[i].ingredients.length; y++) {
            // console.log(recipesData[i].ingredients[y].ingredient);
            if (
              recipesData[i].ingredients[y].ingredient
                .toLowerCase()
                .includes(searchBar[0].value.toLowerCase())
            ) {
              results.push(recipesData[i]);
            }
          }
        }

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

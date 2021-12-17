const searchBar = document.getElementsByClassName("searchBar");
const cards = document.getElementsByClassName("cards");
const card = document.getElementsByClassName("card");
import recipesData from "./recipesData.js";
import RecipesList from "./recipesList.js";
let results = [];

searchBar[0].addEventListener("keyup", (e) => {
  if (searchBar[0].value.length >= 3) {
    results = [];
    recipesData.map((item) => {
      if (
        item.name.toLowerCase().includes(searchBar[0].value.toLowerCase()) ||
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
    console.log(searchBar[0].value);
    cards[0].innerHTML = "";
    results.map((item) => {
      cards[0].innerHTML += new RecipesList().card(item);
    });
  }
  if (searchBar[0].value === "") {
    cards[0].innerHTML = "";
    recipesData.map((item) => {
      cards[0].innerHTML += new RecipesList().card(item);
    });
  }
});

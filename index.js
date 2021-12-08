import recipesData from "./js/recipesData.js";
import RecipesList from "./js/recipesList.js";

const cards = document.getElementsByClassName("cards");

recipesData.map((item) => {
  cards[0].innerHTML += new RecipesList().card(item);
});

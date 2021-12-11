import recipesData from "./js/recipesData.js";
import RecipesList from "./js/recipesList.js";
import FilterTags from "./js/filterTags.js";
import FilterList from "./js/filterList.js";
const cards = document.getElementsByClassName("cards");
const btnSearch = document.getElementsByClassName("btn-search");
recipesData.map((item) => {
  cards[0].innerHTML += new RecipesList().card(item);
});

btnSearch[0].innerHTML = new FilterTags().tags();

new FilterList();

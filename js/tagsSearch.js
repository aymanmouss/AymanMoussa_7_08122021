const ingTag = document.getElementsByClassName("ingTag");
const appTag = document.getElementsByClassName("appTag");
const ustTag = document.getElementsByClassName("ustTag");
const cards = document.getElementsByClassName("cards");
const searchBar = document.getElementsByClassName("searchBar");
import recipesData from "./recipesData.js";
import RecipesList from "./recipesList.js";
let ingResults = [];
let appResults = [];
let ustResults = [];
let results = [];
let result2 = [];
let values = [];

export default class TagSearch {
  constructor(searchData) {
    window.addEventListener("click", (e) => {
      if (e.target.classList.value === "tag_ing") {
        if (results !== "") {
          ingResults = [];
          results.map((item) => {
            item.ingredients.map((ing) => {
              if (
                ing.ingredient
                  .toLowerCase()
                  .includes(ingTag[0].innerText.toLowerCase())
              ) {
                ingResults.push(item);
              }
            });
          });
        } else {
          ingResults = [];
          searchData.map((item) => {
            item.ingredients.map((ing) => {
              if (
                ing.ingredient
                  .toLowerCase()
                  .includes(ingTag[0].innerText.toLowerCase())
              ) {
                ingResults.push(item);
              }
            });
          });
        }
      }
      console.log(results);
      if (e.target.classList.value === "far fa-times-circle 1") {
        ingResults = [];
      }

      if (e.target.classList.value === "tag_app") {
        appResults = [];
        searchData.map((item) => {
          if (
            item.appliance
              .toLowerCase()
              .includes(appTag[0].innerText.toLowerCase())
          ) {
            appResults.push(item);
          }
        });
      }
      if (e.target.classList.value === "far fa-times-circle 2") {
        appResults = [];
      }
      if (e.target.classList.value === "ust_app") {
        ustResults = [];
        searchData.map((item) => {
          item.ustensils.map((ust) => {
            if (ust.toLowerCase().includes(ustTag[0].innerText.toLowerCase())) {
              ustResults.push(item);
            }
          });
        });
        console.log(ustResults);
      }
      if (e.target.classList.value === "far fa-times-circle 3") {
        ustResults = [];
      }
      if (
        e.target.classList.value === "tag_ing" ||
        e.target.classList.value === "tag_app" ||
        e.target.classList.value === "ust_app" ||
        e.target.classList.value === "far fa-times-circle 1" ||
        e.target.classList.value === "far fa-times-circle 2" ||
        e.target.classList.value === "far fa-times-circle 3"
      ) {
        results = [];
        values = [];
        results = ingResults.concat(appResults, ustResults);
        console.log([...new Set(results)]);

        // values = ingResults
        //   .filter((value) => appResults.includes(value))
        //   .filter((value) => ustResults.includes(value));

        console.log(values);

        // results.map((item) => {
        //   if (
        //     item.appliance
        //       .toLowerCase()
        //       .includes(appTag[0].innerText.toLowerCase()) === false
        //   ) {
        //     let indexf = results.indexOf(item);
        //     results.splice(indexf);
        //   }
        // });

        cards[0].innerHTML = "";
        [...new Set(results)].map((item) => {
          cards[0].innerHTML += new RecipesList().card(item);
        });
        if (
          ingTag[0].innerText == "" &&
          appTag[0].innerText == "" &&
          ustTag[0].innerText == ""
        ) {
          cards[0].innerHTML = "";

          [...new Set(searchData)].map((item) => {
            cards[0].innerHTML += new RecipesList().card(item);
          });
        }
      }
    });
  }
}

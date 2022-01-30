import recipesData from "./recipesData.js";
const searchIng = document.getElementsByClassName("inputSearch");
const inputSearchIng = document.getElementsByClassName("inputSearch-ing");
const inputSearchUst = document.getElementsByClassName("inputSearch-ust");
const ingredientsTags = document.getElementsByClassName("ingredientsTags");
const appareilTags = document.getElementsByClassName("appareilTags");
const UstensilesTags = document.getElementsByClassName("UstensilesTags");
let arr = [];
let arr2 = [];
let arr3 = [];
let arrIng = [];
let arrApp = [];
let arrUst = [];
// Data tags array
recipesData.map((item) => {
  item.ingredients.map((daata) => {
    arr.push(daata.ingredient);
  });
  arr2.push(item.appliance);
  item.ustensils.map((data) => {
    arr3.push(data);
  });
});
// ingredients Tags
const ingredients = (items) => {
  return `<p class="tag_ing">${items}</p>`;
};

// Appareil Tags
const appareil = (item) => {
  return `<p class="tag_app">${item}</p>`;
};

// Ustensiles Tags
const Ustensiles = (item) => {
  return `<p class="ust_app">${item}</p>`;
};
// Data ingredients Tags Display
[...new Set(arr)]
  .map((item) => {
    ingredientsTags[0].innerHTML += ingredients(item);
  })
  .join("");

// Data Appareil Tags Display
[...new Set(arr2)]
  .map((item) => {
    appareilTags[0].innerHTML += appareil(item);
  })
  .join("");

// Data Ustensiles Tags Display
[...new Set(arr3)]
  .map((item) => {
    UstensilesTags[0].innerHTML += Ustensiles(item);
  })
  .join("");

window.addEventListener("keyup", (e) => {
  if (e.target.classList.value == "inputSearch") {
    arrIng = arr.filter((item) => {
      return item.toLowerCase().includes(searchIng[0].value);
    });
    ingredientsTags[0].innerHTML = "";
    [...new Set(arrIng)]
      .map((item) => {
        ingredientsTags[0].innerHTML += ingredients(item);
      })
      .join("");
  }
  if (e.target.classList.value == "inputSearch inputSearch-ing") {
    arrApp = arr2.filter((item) => {
      return item.toLowerCase().includes(inputSearchIng[0].value);
    });
    appareilTags[0].innerHTML = "";
    [...new Set(arrApp)]
      .map((item) => {
        appareilTags[0].innerHTML += appareil(item);
      })
      .join("");
  }
  if (e.target.classList.value == "inputSearch inputSearch-ust") {
    arrUst = arr3.filter((item) => {
      return item.toLowerCase().includes(inputSearchUst[0].value);
    });
    UstensilesTags[0].innerHTML = "";
    [...new Set(arrUst)]
      .map((item) => {
        UstensilesTags[0].innerHTML += Ustensiles(item);
      })
      .join("");
  }
});

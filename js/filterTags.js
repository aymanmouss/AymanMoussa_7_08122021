import recipesData from "./recipesData.js";
const searchIng = document.getElementsByClassName("inputSearch");
let arr = [];
let arr2 = [];
let arr3 = [];
let arrIng = [];
export default class FilterTags {
  tags() {
    return `
        <button type="button" id="ingredients" class="btnFilter">Ingredients<i class="fas fa-chevron-down"></i>
        <div class="taglist-btn displaynone" id="tag-ingredients">
            <div class="searchBar">
                <input type="search" class="inputSearch" name="search-ingredients"
                    aria-label="Search through ingredients" id="bg-i" placeholder="Rechercher un ingrédient">
                <i class="fas fa-chevron-up"></i>
            </div>
            <div class="taglist ingredientsTags">

            </div>
        </div>
    </button>
    <button type="button" id="appareil" class="btnFilter">Appareil <i class="fas fa-chevron-down"></i>
    <div class="taglist-btn displaynone" id="tag-appareil">
        <div class="searchBar">
            <input type="search" name="search-ingredients" aria-label="Search through ingredients"
                class="inputSearch inputSearch-ing" id="bg-d" placeholder="Rechercher un ingrédient">
            <i class="fas fa-chevron-up"></i>
        </div>
        <div class="taglist appareilTags">
        </div>
    </div>
</button>
<button type="button" id="ustensiles" class="btnFilter">Ustensiles <i class="fas fa-chevron-down"></i>
<div class="taglist-btn displaynone" id="tag-ustensiles">
    <div class="searchBar">
        <input type="search" name="search-ingredients" aria-label="Search through ingredients"
            class="inputSearch inputSearch-ust" id="bg-u" placeholder="Rechercher un ingrédient">
        <i class="fas fa-chevron-up"></i>
    </div>
    <div class="taglist UstensilesTags ">
    </div>
</div>
</button> 
        `;
  }
}

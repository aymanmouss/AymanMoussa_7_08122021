import recipesData from "./recipesData.js";
let arr = [];
let arr2 = [];
let arr3 = [];
export default class FilterTags {
  tags() {
    recipesData.map((item) => {
      item.ingredients.map((daata) => {
        arr.push(daata.ingredient);
      });
      arr2.push(item.appliance);
      item.ustensils.map((data) => {
        arr3.push(data);
      });
    });
    return `
        <button type="button" id="ingredients" class="btnFilter">Ingredients<i class="fas fa-chevron-down"></i>
        <div class="taglist-btn displaynone" id="tag-ingredients">
            <div class="searchBar">
                <input type="search" class="inputSearch" name="search-ingredients"
                    aria-label="Search through ingredients" id="bg-i" placeholder="Rechercher un ingrédient">
                <i class="fas fa-chevron-up"></i>
            </div>
            <div class="taglist">
                ${[...new Set(arr)]
                  .map((item) => {
                    return `<p class="tag_ing">${item}</p>`;
                  })
                  .join("")}
            </div>
        </div>
    </button>
    <button type="button" id="appareil" class="btnFilter">Appareil <i class="fas fa-chevron-down"></i>
    <div class="taglist-btn displaynone" id="tag-appareil">
        <div class="searchBar">
            <input type="search" name="search-ingredients" aria-label="Search through ingredients"
                class="inputSearch" id="bg-d" placeholder="Rechercher un ingrédient">
            <i class="fas fa-chevron-up"></i>
        </div>
        <div class="taglist">
        ${[...new Set(arr2)]
          .map((item) => {
            return `<p class="tag_app">${item}</p>`;
          })
          .join("")}
        </div>
    </div>
</button>
<button type="button" id="ustensiles" class="btnFilter">Ustensiles <i class="fas fa-chevron-down"></i>
<div class="taglist-btn displaynone" id="tag-ustensiles">
    <div class="searchBar">
        <input type="search" name="search-ingredients" aria-label="Search through ingredients"
            class="inputSearch" id="bg-u" placeholder="Rechercher un ingrédient">
        <i class="fas fa-chevron-up"></i>
    </div>
    <div class="taglist">
    ${[...new Set(arr3)]
      .map((item) => {
        return `<p class="ust_app">${item}</p>`;
      })
      .join("")}
    </div>
</div>
</button> 
        `;
  }
}

export default class RecipesList {
  card(recipes) {
    return `
        <section class="card" id=${recipes.id}>
        <header class="card__image"></header>
        <section class="card__content">
            <header class="card__content__header">
                <p>${recipes.name}</p>
                <p><i class="far fa-clock"></i> ${recipes.time} min</p>
            </header>
            <section class="card__content__main">
                <article class="ingredients">
                ${recipes.ingredients
                  .map((item) => {
                    return `
                    <p><span class="ingredient">${item.ingredient}</span> ${
                      item.quantity ? ":" + item.quantity : ""
                    } ${item.unit ? item.unit : ""}</p>
                    `;
                  })
                  .join("")}
                </article>
                <aside class="recipe">
                    <p>${recipes.description}</p>
                </aside>
            </section>
        </section>
    </section>
        `;
  }
}

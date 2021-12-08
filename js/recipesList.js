export default class RecipesList {
  card(recipes) {
    return `
        <section class="card">
        <header class="card__image"></header>
        <section class="card__content">
            <header class="card__content__header">
                <p>${recipes.name}</p>
                <p><i class="far fa-clock"></i> ${recipes.time} min</p>
            </header>
            <section class="card__content__main">
                <article class="ingredients">
                    <p>Lait de coco: 400ml</p>
                    <p>Jus de citron: 2</p>
                    <p>Créme de coco: 4 cuillères</p>
                    <p>Sucre: 20g</p>
                    <p>Glaçons: 2</p>
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

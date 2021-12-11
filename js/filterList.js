const btnFilter = document.getElementsByClassName("btnFilter");
const ingredientsTag = document.getElementsByClassName("ingredients-tag");
const deviceTag = document.getElementsByClassName("device-tag");
const utensilsTag = document.getElementsByClassName("utensils-tag");
const ingTag = document.getElementsByClassName("ingTag");
const appTag = document.getElementsByClassName("appTag");
const ustTag = document.getElementsByClassName("ustTag");
const taglistBtn = document.getElementsByClassName("taglist-btn");
export default class FilterList {
  constructor() {
    window.addEventListener("click", (e) => {
      if (e.target.classList.value == "btnFilter") {
        [...btnFilter].forEach((item) => {
          if (item.classList.value === "btnFilter width-btn") {
            item.classList.remove("width-btn");
          }
        });
        e.target.classList.add("width-btn");
        [...taglistBtn].forEach((item) => {
          if (item.classList.value === "taglist-btn") {
            item.classList.add("displaynone");
          }
          if (item.parentElement.classList.value === "btnFilter width-btn") {
            item.classList.remove("displaynone");
          }
        });
      }
      if (
        e.target.classList.value === "fas fa-chevron-up" ||
        e.target.classList.value === "tag_ing" ||
        e.target.classList.value === "tag_app" ||
        e.target.classList.value === "ust_app"
      ) {
        [...btnFilter].forEach((item) => {
          if (item.classList.value === "btnFilter width-btn") {
            item.classList.remove("width-btn");
          }
        });
        [...taglistBtn].forEach((item) => {
          if (item.classList.value === "taglist-btn") {
            item.classList.add("displaynone");
          }
        });
      }
      // FilterTags X (ingredients)
      if (e.target.classList.value === "tag_ing") {
        ingTag[0].innerText = e.target.innerText;
        ingredientsTag[0].classList.remove("displaynone");
      }
      // FilterTags X (appareil)
      if (e.target.classList.value === "tag_app") {
        appTag[0].innerText = e.target.innerText;
        deviceTag[0].classList.remove("displaynone");
      }
      // FilterTags X (appareil)
      if (e.target.classList.value === "ust_app") {
        ustTag[0].innerText = e.target.innerText;
        utensilsTag[0].classList.remove("displaynone");
      }
      // click icone close filter tag (ingredients)
      if (e.target.classList.value === "far fa-times-circle 1") {
        ingredientsTag[0].classList.add("displaynone");
      }
      if (e.target.classList.value === "far fa-times-circle 2") {
        deviceTag[0].classList.add("displaynone");
      }
      if (e.target.classList.value === "far fa-times-circle 3") {
        utensilsTag[0].classList.add("displaynone");
      }
    });
  }
}

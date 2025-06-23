const name = document.querySelector(".name");

function changeColor(color) {
    name.style.color = color;
}

const article = document.querySelector("#content");
const toggleButton = document.querySelector("#toggle-button");


function showMore() {
    if (article.classList.contains("open")) {
     
        article.classList.remove("open");
        toggleButton.innerHTML = "Show more";
    } else {
  
        article.classList.add("open");
        toggleButton.innerHTML = "Show less";
    }
}

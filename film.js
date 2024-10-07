const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    const maxClicks = imageItem - 4; 

    arrow.addEventListener("click", function () {
        if (clickCounter < maxClicks) {
            clickCounter++;
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 275}px)`;
        } else {
            clickCounter = 0; 
            movieLists[i].style.transform = "translateX(0)";
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.navbar,.sidebar,.sidebar i,.toggle,.movie-list-title,.toggle-ball,.movie-list-filter select");
ball.addEventListener("click", function(){
items.forEach((item) => item.classList.toggle("active"));});
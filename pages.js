// this is the data for holding which page we're on

let pageNumber = 0;


// content for the pages

const pages = [
    {copy: "a passionate storyteller", background: "#edc7a9", circle: "#3e78ed"},
    {copy: "an image maker", background: "#a1fffe",  circle: "#e34a47"},
    {copy: "looking for a job in September", background: "#d3c7f3", circle: "#f7fe00"},
    {copy: 'inviting you <a href="http://www.iremharnak.com">to check her portfolio</a>', background: "#faffb8", circle: "#b472e6"},

]
// pick the relevant tags (create the variable to hold the selectors)
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");



// make a next function to increase the pageNumber
const next = function () {
    pageNumber = pageNumber + 1;

    if (pageNumber > pages.length - 1) {
        pageNumber = 0;
    }
    updateSection();
}

// make a previous function to decrease the pageNumber
const previous = function () {
    pageNumber= pageNumber -1;

    if (pageNumber < 0) {
        pageNumber = pages.length - 1;
    }
    updateSection();
}

// make a random function to randomize the pageNumber
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length);
    updateSection();
}

// to update the section's content & style
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}

// run the next function when you click
nextTag.addEventListener("click", function(){
    next();

})

// run the previous function when you click
previousTag.addEventListener("click", function() {
    previous();
})

// run the random function when you click
randomTag.addEventListener("click", function(){
    random();
})

// when a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener("keyup", function(event) {
    console.log(event);

    if (event.key== "ArrowRight") {
        next();
    }
    if (event.key== "ArrowLeft") {
        previous();
    }
})
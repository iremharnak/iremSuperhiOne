// this is the data for holding which page we're on

let pageNumber = 0;


// pick the relevant tags (create the variable to hold the selectors)
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const outputTag = document.querySelector("h2");


// make a next function to increase the pageNumber
const next = function () {
    pageNumber = pageNumber + 1;

    if (pageNumber > 10) {
        pageNumber = 1;
    }
    updateSection();
}

// make a previous function to decrease the pageNumber
const previous = function () {
    pageNumber= pageNumber -1;

    if (pageNumber < 1) {
        pageNumber = 10;
    }
    updateSection();
}

// to update the section's content & style
const updateSection = function () {
    outputTag.innerHTML = pageNumber;
}

// run the next function when you click
nextTag.addEventListener("click", function(){
    next();

})

// run the previous function when you click
previousTag.addEventListener("click", function() {
    previous();
})

// Get the buttons
let homeButton = document.getElementsByClassName("feature-bttn")[0];
let mapButton = document.getElementsByClassName("feature-bttn")[1];
let newsButton = document.getElementsByClassName("feature-bttn")[2];

// get the image
let imageElement = document.getElementById("feature-img");

// get the description
let desElement = document.getElementById("feature-description");


// The function
homeButton.onclick = function () {
    imageElement.src = "images/home.png";
    desElement.innerHTML = "Various information about how the user is benefitting the community will be displayed. The user will be shown the number of community gardens near them, how many gardens they support and the average plants in the area";
};

mapButton.onclick = function () {
    imageElement.src = "images/maps.png";
    desElement.innerHTML = "A map of nearby community gardens will be displayed. The rating of the garden starting from the highest will also be displayed. The user can select if they want to support a garden from this page.";
};

newsButton.onclick = function () {
    imageElement.src = "images/news.png";
    desElement.innerHTML = "News relevant to community garden will be displayed. The user will be able to read the news starting from the most popular headline regarding community gardens.";
};
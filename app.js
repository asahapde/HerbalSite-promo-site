// Get the buttons
let homeButton = document.getElementsByClassName("feature-bttn")[0];
let mapButton = document.getElementsByClassName("feature-bttn")[1];
let newsButton = document.getElementsByClassName("feature-bttn")[2];

// get the image
let imageElement = document.getElementById("feature-img");

// get the description
let desElement = document.getElementById("feature-description");


// The function
homeButton.onclick = function(){
    imageElement.src = "images/signin.png";
    desElement.innerHTML = "Various information about how the user is benefitting the community will be displayed.";
};

mapButton.onclick = function(){
    imageElement.src = "images/signin.png";
    desElement.innerHTML = "A map of nearby community garden will be displayed.";
};

newsButton.onclick = function(){
    imageElement.src = "images/news.png";
    desElement.innerHTML = "News relevant to community garden will be displayed.";
};
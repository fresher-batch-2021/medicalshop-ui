function addSliderImages() {
    const slider = document.querySelector('#slideshow_container');
    for (let slide of slideData) {
        let slideDiv = document.createElement('div');
        slideDiv.setAttribute('class', 'mySlides fade');
        slideDiv.innerHTML = `<img class="imgSlide" src="${slide}"/>`;
        slider.appendChild(slideDiv);
    }
}
var slideIndex = 0;
//to change image in slider change the data here 
let slideData = ["images/medbanner.png", "images/medbanner1.png", "images/medbanner2.png"];

function showSlides() {
    slideIndex++;
    let mySlidesDiv = document.querySelectorAll('.mySlides');
    // Don't display images while loading
    mySlidesDiv.forEach(divObj => {
        divObj.style.display = "none";
    });
    //reset to 1st image
    if (slideIndex > mySlidesDiv.length) {
        slideIndex = 1
    }
    //display one image at at time
    mySlidesDiv[slideIndex - 1].style.display = "block"; //displaying the image
    setTimeout(showSlides, 1650); // Change image every 1.65 seconds  
}
addSliderImages();
showSlides();
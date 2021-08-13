$("#header").load("header.html");
$("#footer").load("footer.html");
function addSliderImages(){
    
  const slider = document.querySelector('.slideshow_container');

  for (let slide of slideData) {
      let slideDiv = document.createElement('div');
      slideDiv.setAttribute('class', 'mySlides fade');
      slideDiv.innerHTML = `<img class="imgSlide" src="${slide}"/>`;
      slider.appendChild(slideDiv);
  }
}
var slideIndex = 0;
//to change image in slider change the data here 
let slideData = ["images/off.jpg", "images/off1.jpg"];

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
  mySlidesDiv[slideIndex - 1].style.display = "block";//displaying the image
  setTimeout(showSlides, 1650); // Change image every 1.65 seconds  
}


addSliderImages();
showSlides();





const url = "assets/js/indexproducts.json";
console.log("url", url);
axios.get(url).then((res) => {
  let products = res.data;
  console.table(products);
  let content = " ";
  for (let productobj of products) {
    content =
      content +  `<div class="product-box">
      <div class="product-img">
          <img src="${productobj.productImage}" alt="Show Image">
      </div>
      <div class="product-details">
          <div>${productobj.productName}</div>
          <div class="p-price">Rs.${productobj.price}</div>
          <button><a class="addtocart"href="cart.html?productName=${productobj.productName}&price=Rs.${productobj.price}" >ADD TO CART</a></button>
      </div>
  </div>`
}
  console.log(content);
  document.querySelector("#producttable").innerHTML = content;

}).catch((err) => {
  console.log("err", err);
})

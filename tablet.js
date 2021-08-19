function tablets()
{
  let productContent = " ";
    productService.getTablets().then((res) => {
    let data = res.data.rows;
      let productList  = data.map(obj=>obj.doc);
    console.table(productList);  
for (let productobj of productList) {
  productContent = productContent +  `<div class="product-box">
      <div class="product-img">
          <img src="${productobj.productImage}" alt="Show Image">
      </div>
      <div class="product-details">
          <div>${productobj.productName}</div>
          <div class="p-price">Rs.${productobj.price}</div>
          <button> <a class="addtocart" onclick="checkLoginForMyOrder();" href="cart.html?productName=${productobj.productName}&price=${productobj.price}"> ADD TO CART</a></button>
      </div>
  </div>`
  localStorage.setItem("productobjList",JSON.stringify(productobj));
}
  console.log(productContent);
  document.querySelector("#tablettable").innerHTML = productContent;
}).catch((err) => {
  // console.log( err.response.data);
})
}
tablets();
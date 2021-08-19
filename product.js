function products()
{
  let productContent = " ";

  const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
  const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
  const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_productlist/_all_docs?include_docs=true";
    console.log("url", url);
    axios.get(url, {headers: { Authorization: basicAuth} }).then((res) => {

    let data = res.data.rows;
      let productList  = data.map(obj=>obj.doc);
    console.log(productList);
    
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
  document.querySelector("#producttable").innerHTML = productContent;
}).catch((err) => {
  // console.log( err.response.data);
})
}
products();
const param = new URLSearchParams(window.location.search.substr(1));
let category = (param.get("value"));
console.log(category);

function gettingData() {
    let count = 0;
    //getting category from url
    let productContent = `<hr><h1 style=" margin-top: 20px;">Product for ${category}</h1><hr>`;
    productService.getAllProducts().then((res) => {
        let data = res.data.rows;
        let productList = data.map(obj => obj.doc);
        console.log(productList);
        for (let productobj of productList) {
            if (productobj.category == category) {
                productContent = productContent + `<div class="card">
    <img src="${productobj.productImage}" alt="Avatar">
    <div class="product-detail-container">
        <h4><b>${productobj.productName}</b></h4>
        <p>MRP:Rs.${productobj.price}</p>
        <button> <a class="add-cart-Button" onclick="checkLoginForMyOrder();" href="cart.html?productName=${productobj.productName}&productImage=${productobj.productImage}&price=${productobj.price}"> ADD TO CART</a></button>
    </div>
</div>`
                console.log(productContent);
                document.querySelector("#producttable").innerHTML = productContent;

            }

        }
        // alert("data got successfull");
    }).catch(err => {
        alert("error");
    });
}

gettingData();
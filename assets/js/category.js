const param = new URLSearchParams(window.location.search.substr(1));
let category = (param.get("value"));
console.log(category);

function gettingData() {
    //getting category from url
    let productContent = `<h1 class="titles">Product for ${category}</h1>`;
    productService.getAllProducts().then((res) => {
        let data = res.data.rows;
        if (res) {
            hideSpinner();
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
                }

                $("#producttable").html(productContent);

            }

        }
    }).catch(err => {
        alert("error");
    });
}

gettingData();

function hideSpinner() {
    document.getElementById('spinner')
        .style.display = 'none';
}
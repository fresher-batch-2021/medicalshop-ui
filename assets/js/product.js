function products() {
    let productContent = " ";
    productService.getAllProducts().then((res) => {
        let data = res.data.rows;
        let productList = data.map(obj => obj.doc);
        console.log(productList);
        for (let productobj of productList) {
            productContent = productContent + `<div class="card">
            <img src="${productobj.productImage}" alt="Avatar">
            <div class="product-detail-container">
                <h4><b>${productobj.productName}</b></h4>
                <p>MRP:Rs.${productobj.price}</p>
                <button> <a class="add-cart-Button" onclick="checkLoginForMyOrder();" href="cart.html?productName=${productobj.productName}&productImage=${productobj.productImage}&price=${productobj.price}"> ADD TO CART</a></button>
            </div>
        </div>`
            localStorage.setItem("productobjList", JSON.stringify(productobj));
        }
        console.log(productContent);
        document.querySelector("#producttable").innerHTML = productContent;
    }).catch((err) => {
        // console.log( err.response.data);
    })
}
products();


function searchMedicine() {
    event.preventDefault();
    console.log("search medicines");
    let productName = document.querySelector("#search").value;
    console.log(productName);
    productService.getAllProducts().then(res => {
        const data = res.data.rows;
        const productData = data.map(obj => obj.doc);
        console.log(productData);
        let filteredProducts = productData;
        if (productName != "") {
            filteredProducts = productData.filter(obj => obj.productName.toLowerCase().indexOf(productName.toLowerCase()) != -1);
        }
        console.table(filteredProducts);
        let productContent = "";
        for (let productobj of filteredProducts) {
            productContent = productContent + `<div class="card">
            <img src="${productobj.productImage}" alt="Avatar">
            <div class="product-detail-container">
                <h4><b>${productobj.productName}</b></h4>
                <p>MRP:Rs.${productobj.price}</p>
                <button> <a class="add-cart-Button" onclick="checkLoginForMyOrder();" href="cart.html?productName=${productobj.productName}&price=${productobj.price}"> ADD TO CART</a></button>
            </div>
        </div>`
            document.querySelector("#producttable").innerHTML = productContent;
        }
    });
}
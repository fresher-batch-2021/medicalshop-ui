function products() {
    let productContent = " ";
    productService.getAllProducts().then((res) => {
        let data = res.data.rows;
        if (res) {
            hideSpinner();
            let productList = data.map(obj => obj.doc);
            console.log(productList);
            for (let productobj of productList) {
                productContent = productContent + `
            <div class="card">
            <img src="${productobj.productImage}" alt="Avatar">
            <div class="product-detail-container">
                <h4><b>${productobj.productName}</b></h4>
                <p>MRP:Rs.${productobj.price}</p>
                <button> <a class="add-cart-Button" onclick="checkLoginForMyOrder();" href="cart.html?productName=${productobj.productName}&productImage=${productobj.productImage}&price=${productobj.price}"> ADD TO CART</a></button>
            </div>
        </div>
            `
                localStorage.setItem("productobjList", JSON.stringify(productobj));
            }
            console.log(productContent);
        }
        $("#producttable").html(productContent);
    }).catch((err) => {})
}
products();

function hideSpinner() {
    document.getElementById('spinner')
        .style.display = 'none';
}

function searchMedicine() {
    event.preventDefault();
    console.log("search medicines");
    let productName = $("#search").val();
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
            productContent = productContent + `
            <section class="productContent">
            <div class="card">
            <img src="${productobj.productImage}" alt="Avatar">
            <div class="product-detail-container">
                <h4><b>${productobj.productName}</b></h4>
                <p>MRP:Rs.${productobj.price}</p>
                <button> <a class="add-cart-Button" onclick="checkLoginForMyOrder();" href="cart.html?productName=${productobj.productName}&price=${productobj.price}"> ADD TO CART</a></button>
            </div>
        </div>
        <section>`
            $("#producttable").html(productContent);
        }
    });
}
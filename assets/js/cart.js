$("#header").load("header.html");

function getAllProducts() {
    let products = JSON.parse(localStorage.getItem("PRODUCTS")) || [];
    return products;

}

function addProducts(product) {
    let products = this.getAllProducts();
    products.push(product);
    localStorage.setItem("PRODUCTS", JSON.stringify(products));
}

function addProductToJSON() {
    console.log(window.location.search.substr(1));
    const params = new URLSearchParams(window.location.search.substr(1));
    if (params.has("productName")) {
        let medicineName = params.get("productName");
        let medicineprice = params.get("price");
        let product = {
            "productName": medicineName,
            "Price": medicineprice
        };
        console.table(product);
        console.log("product", medicineName);
        console.log("price", medicineprice);
        toCart(product);
    }
}
addProductToJSON();

function toCart(product) {
    let cartItemsStr = localStorage.getItem("PRODUCTS");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    console.log(cartItems);
    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems => cartItems.productName == product.productName);
    console.log(index);
    if (index != -1) {
        let cartObj = cartItems[index];
        console.log("before ", cartObj);
        cartObj.Quantity++; // for existing products add 
        cartItems[index] = cartObj;
        console.log("After", cartObj);
        localStorage.setItem("PRODUCTS", JSON.stringify(cartItems));

    } else {
        //for new products , quantity would be 1
        product.Quantity = 1;
        addProducts(product);
    }
}
let productList = getAllProducts();
addtocart();

function addtocart() {
    let itemList = "";
    let total = 0;
    let count = 1;
    let sum = 0;
    console.log(sum);
    for (let list of productList) {
        console.log("productname", list.productName);
        console.log("proprice", list.Price);
        let priceValue = parseFloat(list.Price);
        total = priceValue * list.Quantity;
        console.log(total);
        itemList = itemList + `<tr>
        <td >   ${count} </td> 
        <td>   ${list.productName} </td>
        <td>   ${list.Price} </td>
        <td>   ${list.Quantity} </td>
        <td>   ${total} </td> 
        <td><button type="button" class="deletebutton" onclick="deleteCartData(${count - 1})"> <i class="fa fa-trash-o" style="font-size:14px;color:red"></i> </button></td>
        </tr>`;
        count++;
        sum = sum + total;
        console.log(sum);
        console.log(count - 1);
        localStorage.setItem("cartCount", count - 1);

    }
    let end = `<tr><td columnspan="3" class="totalRow" >SubTotal</td><td columnspan="5">${sum}</td></tr></table>`;
    localStorage.setItem("totalAmount", sum);
    content = itemList + end;
    $("#cart-table").html(content);
    localStorage.setItem("productList", JSON.stringify(productList));
}

function deleteCartData(index) {
    let arr = JSON.parse(localStorage.getItem("productList"));

    if (arr[index].Quantity > 1) {

        arr[index].Quantity--;
    } else {
        arr.splice(index, 1);
    }
    console.log(arr[index]);
    localStorage.setItem("PRODUCTS", JSON.stringify(arr));
    window.location.href = "cart.html";
    alert("Do You want to remove this item from cart");
}


function cartCheck() {
    let cartItem = JSON.parse(localStorage.getItem("PRODUCTS"));
    if (cartItem == null || cartItem == "") {
        alert("cant order when cart is empty ");
        // toastr.warning("cant order when cart is empty");
        window.location.href = "products.html";
    } else {
        checkLogin1();
        window.location.href = "payment.html";
    }
}

function getCartCount() {
    let cartCountStr = localStorage.getItem("cartCount");
    let cartCountValue = cartCountStr != null ? JSON.parse(cartCountStr) : [];
    console.log(cartCountValue);
    let content = "";
    content = cartCountValue;
    $("#countValue").html(content);
}
getCartCount();

function checkLogin1() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
    if (user == null) {

        window.location.href = "login.html?redirectURL=cart.html";
    } else {
        window.location.href = "payment.html";

    }
}
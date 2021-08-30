function addMedicine() {
    event.preventDefault();
    const productName = document.querySelector("#name").value;
    const productImage = document.querySelector("#imageurl").value;
    const price = document.querySelector("#price").value;
    console.log(productName)
    console.log(productImage)
    console.log(price)
    try {
        let productValues = {
            productName: productName,
            productImage: productImage,
            price: price
        };
        console.log(productValues);
        productService.AddProducts(productValues).then(res => {
            alert("Product Added successful");
            window.location.href = "listProducts_admin.html";
        }).catch(err => {
            console.log(err.response.data);
            alert("Failed to add Products");
        });

    } catch (err) {
        console.error(err.message);
        alert("Error: " + err.message);
    }



}

function editMedicine() {

}
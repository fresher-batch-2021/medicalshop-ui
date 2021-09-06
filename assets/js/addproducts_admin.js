function addMedicine() {
    event.preventDefault();
    const productName = $("#medicineName").val();
    const imageUrl = $("#imageurl").val();
    const price = $("#price").val();
    const category = $("#category").val();
    const productImage = imageUrl.substr(imageUrl.lastIndexOf("\\") + 1);
    console.log(productName)
    console.log(productImage)
    console.log(price)
    try {

        ProductsValidation.validate(productName, price, category)
        let productValues = {
            productName: productName,
            productImage: "images/" + productImage,
            price: price,
            category: category,
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
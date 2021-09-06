class ProductsValidation {
    static validate(productName, price, category) {
        if (productName == "" || productName == null || productName.trim() == "") {
            throw new Error("Name cannot be null");
        } else if (price == "" || price == null || price.trim() == "") {
            throw new Error("please Enter a Price ")
        } else if (category == "" || category == null || category.trim() == "") {
            throw new Error("MobileNumber is not valid");
        }
    }
}
function orderNow() {
    event.preventDefault();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    console.log(today);
    let total = localStorage.getItem("totalAmount");
    $("#totalAmount").val(total);
    const name = $("#name").val();
    const phonenumber = $("#phoneNumber").val();
    const date = $("#date").val();
    const street = $("#street").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const pincode = $("#pincode").val();
    const totalAmount = $("#totalAmount").val();
    let product = JSON.parse(localStorage.getItem("PRODUCTS"));
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail = user != null ? user.email : null;
    try {
        paymentValidation.validate(name, street, state, pincode, phonenumber)
        let orderNow = {
            name: name,
            phonenumber: phonenumber,
            TodayDate: today,
            date: date,
            street: street,
            city: city,
            state: state,
            pincode: pincode,
            status: "ORDERED",
            totalAmount: totalAmount,
            Payment: "Cash On Delivery",
            productDetails: product,
            email: loggedInEmail
        };
        userService.order(orderNow).then(res => {
            toastr.success("your order successfully placed");
            setTimeout(function() {
                window.location.href = "placeOrder.html"
            }, 3000);
            localStorage.removeItem("PRODUCTS");
            localStorage.removeItem("cartCount");
        }).catch(err => {
            toastr.error("order failed");
        });
    } catch (err) {
        console.log(err.message);
        alert(err.message);
    }
}
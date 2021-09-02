function checkLogin1() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
    if (user == null) {
        window.location.href = "login.html?redirectURL=cart.html";
    } else {
        window.location.href = "placeOrder.html";

    }
}
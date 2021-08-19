
function logIn() {
    let login = JSON.parse(localStorage.getItem("logIn"));
    if (login == null || login == undefined) { login = false; }
    let content = "";
    if (login) {
        content = `<a class="navlinks" onclick="logout()">logout</a>`;
    } else {
        content = `<a class="navlinks" href="login.html">login</a>`;
    }
    document.querySelector(".navlinks").innerHTML = content;
}
function checkLogin() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    let login = JSON.parse(localStorage.getItem("logIn"));
    if (login = true) {
        document.querySelector("#loggedIn").innerHTML = "welcome" + user.email + "</a>";
    }
}
function LoginForAddress() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    if (user != null) {
        let addressStr = localStorage.getItem("paymentaddress");
        let addressObj = JSON.parse(addressStr);
        console.log(addressStr);
        let paymentObj = Object.assign(orderObj, addressObj);
        console.log(paymentObj);
        document.querySelector("#loggedIn1").innerHTML = "Welcome <a href = 'profile.html'>" + paymentObj;
    }

}
function logout() {
    localStorage.setItem("logIn", JSON.stringify(false));
    localStorage.removeItem("PRODUCTS");
    localStorage.removeItem("LOGGED_IN_USER");
    localStorage.removeItem("cartCount");
    window.location.href = "index.html";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
logIn();
function toShow() {
    let userStr = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.log(userStr);
    if (userStr != null) {
        // localStorage.setItem("isLoggedIn",JSON.stringify(true))
        $(".navlink[data-loggedin='true']").show();
        $(".navlink[data-loggedin='false']").hide();
        // $("#profile").html("Welcome " + user.email + "!!!");
    } else {
        // localStorage.setItem("isLoggedIn",JSON.stringify(false))
        $(".navlink[data-loggedin='true']").hide();
        $(".navlink[data-loggedin='false']").show();
    }
}

function checkLogin() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
    if (user != null) {
        document.querySelector("#loggedIn").innerHTML = "welcome" + " " + user.email + "</a>";
    }
}
checkLogin();
toShow();

function logout() {
    localStorage.removeItem("PRODUCTS");
    localStorage.removeItem("LOGGED_IN_USER");
    localStorage.removeItem("cartCount");
    window.location.href = "index.html";
}
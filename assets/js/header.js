function toShow() {
    let userStr = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.log(userStr);
    if (userStr != null) {
        $(".navlink[data-loggedin='true']").show();
        $(".navlink[data-loggedin='false']").hide();
    } else {
        $(".navlink[data-loggedin='true']").hide();
        $(".navlink[data-loggedin='false']").show();
    }
}

function checkLogin() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
    if (user != null) {
        $("#loggedIn").html("welcome" + " " + user.email + "</a>");
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
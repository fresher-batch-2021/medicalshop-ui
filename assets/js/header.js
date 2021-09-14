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

function model() {
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("loggedIn");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
model();

function myOrder() {
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    console.log(email);
    let content = "";
    productService.getUsers().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);
        console.table(orders);
        let userDetail = orders.filter(obj => obj.email == email);
        let i = 0;
        for (let userDetailObj of userDetail) {
            i = i + 1;
            content = content + `<div>Name:${userDetailObj.name}</div>
            <div>Email:${userDetailObj.email}</div>
            <div>MobileNo:${userDetailObj.mobileNo}</div>`;
            $("#userDetail").html(content);
        }
    }).catch(err => {
        console.log(err);
    });

}
myOrder();
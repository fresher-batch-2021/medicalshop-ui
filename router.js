const routes = [
    { path: 'index.html' },
    { path: 'products.html'},
    { path: 'cart.html'},
    { path: 'login.html' },
    { path: 'register.html' },
    { path: 'myOrders.html'},
    { path: 'payment.html'}
];
function checkAccess(pageName, role) {
    let allowed = false;
    for (let route of routes) {
        
        if (route.path == pageName) {
            
            if (!route.roles) {
                allowed = true;
                break;
            }
            else if (route.roles.includes(role)) {
                allowed = true
                break;
            }
        }
    }
    return allowed;
}

(function() {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    let allowedAccess = checkAccess(pathName, role);
    if (!allowedAccess) {
        alert("You are not authorized to access this page. Redirecting to login page");
        window.location.href = "login.html";
    }
})();

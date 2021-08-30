function adminlogin() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const role = "admin";
    try {
        userService.login(email, password, role).then(res => {
            let data = res.data.docs;
            console.log(data);
            if (data[0].role == "admin") {
                console.log(data.role);
                alert("successfully logged in");
                window.location.href = "listProducts_admin.html";
            }
        }).catch(err => {
            console.error(err.response.data);
            alert("error");
        });
    } catch (err) {
        console.error(err.message);
        alert("error" + err.message);
    }
}
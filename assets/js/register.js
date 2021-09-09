$("#header").load("header.html");
$("#footer").load("footer.html");

function register() {
    event.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const mobileNo = $("#mobileNo").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    try {

        RegisterValidation.validate(name, email, mobileNo, password, confirmPassword)


        const userobj = {
            "name": name,
            "email": email,
            "mobileNo": mobileNo,
            "password": password,
            "confirmPassword": confirmPassword,
            "role": "user"
        };
        console.log(userobj);
        userService.register(userobj).then(res => {
            let data = res.data;
            console.log(data);
            toastr.success("Register successful");

            setTimeout(function() {
                window.location.href = "login.html"
            }, 3000);
        }).catch(err => {
            console.error(err.response.data);
            alert("error");
        });
    } catch (err) {
        console.error(err.message);
        toastr.error("Register failed");
    }
}
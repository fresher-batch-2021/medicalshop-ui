$("#header").load("header.html");
function login() {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (password.length < 8) {

    alert("password must be greater than 8 characters");
  }
  else 
  {
    userService.login(email, password).then(res => {
      let data = res.data.docs;
      console.log(data);
      if (data.length == 0) {
        alert("Invalid login");
      }
      else {
        const user = data[0];
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
        alert("successfully logged in");
      
      }
    }).catch(err => {
      console.error(err.response.data);
      alert("err");
    });
  // window.location.href = "index.html";

  }


}

function checkLoginForMyOrder() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    console.log(user);
    if (user != null) {
        document.querySelector("#ordertable").innerHTML = content1;
    }
    else
    {
      let content2 ="Nothing to show";
      document.querySelector("#ordertable").innerHTML = content2;

    }
  }
  checkLoginForMyOrder();
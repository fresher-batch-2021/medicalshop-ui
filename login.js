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
    const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    console.log(basicAuth);
    const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users/_find"
    const requsetData = {
      selector: {
        email: email,
        password: password
      },
      fields: ["_id", "name", "email"],
    };
    console.log(requsetData);
    ;
    axios.post(url, requsetData, { headers: { 'Authorization': basicAuth } }).then(res => {
      let data = res.data.docs;
      console.log(data);
      if (data.length == 0) {
        alert("Invalid login");
      }
      else {
        const user = data[0];
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
        alert("successfully logged in");
        window.location.href = "index.html";
      }
    }).catch(err => {
      console.error(err.response.data);
      alert("err");
    });


  }


}

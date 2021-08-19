$("#header").load("header.html");
function orderNow()
{
let itemsStr = localStorage.getItem("PRODUCTS");
let items=JSON.parse(itemsStr);
console.log(items);
let orderObj = {
  items: items
}
let addressStr = localStorage.getItem("paymentaddress");
let addressObj=JSON.parse(addressStr);
console.log(addressStr);
let paymentObj=Object.assign(orderObj,addressObj);
console.log(paymentObj);
var orderContent = "";
let Paymentaddress=addressObj.name+","+addressObj.street+","+addressObj.city+","+addressObj.state+","+addressObj.pincode;
for (let paymentdetails of items)
 {  
  console.log(Paymentaddress);
  orderContent =
  orderContent +
    "<tr><td>" + paymentdetails.productName + "</td><td>" + paymentdetails.Price+ "</td><td>" + paymentdetails.Quantity+"<td></tr>";
}
console.log(orderContent);
let addressContent=Paymentaddress;
document.querySelector("#ordertable").innerHTML = orderContent;
document.querySelector("#ordertableadd").innerHTML = addressContent;
}
orderNow();
function checkLogin1() {
  let userStr = localStorage.getItem("LOGGED_IN_USER");
  let user = userStr != null ? JSON.parse(userStr) : null;
  console.log(user);
  if (user == null) {
      window.location.href="login.html?redirectURL=cart.html";
  }
  else
  {
    window.location.href="placeOrder.html";
    
  }
}

function proceed()
{
    localStorage.removeItem("cartCount");
    window.location.href = "login.html";
}

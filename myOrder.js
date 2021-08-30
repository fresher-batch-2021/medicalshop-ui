// function checkLoginForMyOrder() {
//     let userStr = localStorage.getItem("LOGGED_IN_USER");
//     let user = userStr != null ? JSON.parse(userStr) : null;
//     console.log(user);
//     if (user != null) {
//         document.querySelector("#ordertable").innerHTML = content1;
//     }
//     else
//     {
//       let content2 ="Nothing to show";
//       document.querySelector("#ordertable").innerHTML = content2;

//     }
//   }
//   checkLoginForMyOrder();
function myOrder() {
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    console.log(email);
    userService.getAllOrders().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);
        console.table(orders);
        let myOrders = orders.filter(obj => obj.email == email);
        let content = "";
        for (let order of myOrders) {
            for (item of order.productDetails) {
                content = content + `<tr>
               <td>${item.productName}</td>
               <td>${item.Price}</td>
               <td>${item.Quantity}</td>
               <td>${order.totalAmount}</td>
               <td>${order.status}</td>
               <td>${order.date}</td>
               </tr>`;
            }
        }
        console.log(content);
        document.querySelector("#myOrderContainer").innerHTML = content;
    });
}
myOrder();
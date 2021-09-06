function myOrder() {
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    console.log(email);
    let content = "";
    userService.getAllOrders().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);
        console.table(orders);
        let productList = orders.filter(obj => obj.email == email);
        let i = 0;
        for (let productobj of productList) {
            console.table(productobj);
            i = i + 1;
            let itemList = "<ul>";
            for (let item of productobj.productDetails) {
                itemList += `<li>${item.productName} - ${item.Quantity} Qty - Rs. ${item.Price}</li>`
            }
            let orderDate = new Date(productobj.date).toJSON(); //.substr(0, 10);
            let ordereddate = moment(new Date(orderDate)).format("DD-MM-YYYY");
            itemList += '</ul>'

            content = content + `<tr>
            <td >   ${i} </td>  
            <td>   ${productobj.name} </td>
            <td>   ${productobj.phonenumber} </td> 
            <td>   ${itemList} </td> 
            <td>   ${productobj.totalAmount} </td> 
            <td>   ${productobj.Payment} </td> 
            <td>   ${productobj.TodayDate} </td>
            <td>   ${ordereddate} </td> 
            <td>   ${productobj.status} </td> 
          </tr>`;
            $("#myOrderContainer").html(content);
        }
    }).catch(err => {
        console.log(err);
    });

}
myOrder();
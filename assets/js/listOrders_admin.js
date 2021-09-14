function listData() {
    let content = "";
    adminService.getAllOrders().then(res => {
        let data = res.data.rows;
        let productList = data.map(obj => obj.doc);
        console.log(productList);
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
        <td>   ${productobj.TodayDate} </td> 
        <td>   ${productobj.totalAmount} </td> 
        <td>   ${productobj.Payment} </td>
        <td>   ${ordereddate} </td>
        <td class="status">   ${productobj.status} </td> 
        <td>   <button  class="button" onclick="changeStatus('${productobj._id}')">Change</button></td>
        </tr>`;
            $("#listOrders").html(content);
        }
    }).catch(err => {
        console.log(err);
    });

}
listData();

function changeStatus(id) {

    const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_orders/" + id;

    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        let orderObj = res.data;
        orderObj.status = "DELIVERED";
        axios.put(url, orderObj, { headers: { 'Authorization': basicAuth } }).then(res1 => {
            console.log("update status : " + res1.data);
            alert("Updated");
            listData();
        }).catch(err => {
            console.log(err);
            alert("failed");
        })

    });

}
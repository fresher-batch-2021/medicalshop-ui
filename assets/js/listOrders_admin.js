function listData() {
    let content = "";
    const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_orders/_all_docs?include_docs=true";
    axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
        let data = res.data.rows;
        let productList = data.map(obj => obj.doc);
        console.log(productList);
        // let details = productList.map(obj => obj.productDetails)
        // console.log("Details", details);
        // for (let product of productList) {
        //     console.log("Items", product);
        // }
        let i = 0;
        for (let productobj of productList) {
            console.table(productobj);
            i = i + 1;
            let itemList = "<ul>";
            for (let item of productobj.productDetails) {
                itemList += `<li>${item.productName} - ${item.Quantity} Qty - Rs. ${item.Price}</li>`
            }
            itemList += '</ul>'
            content = content + `<tr>
        <td >   ${i} </td> 
        <td>   ${productobj.name} </td>
        <td>   ${productobj.phonenumber} </td>
        <td>   ${itemList} </td>
        <td>   ${productobj.TodayDate} </td> 
        <td>   ${productobj.totalAmount} </td> 
        <td>   ${productobj.Payment} </td>
        <td>   ${ productobj.date} </td>
        <td>   ${ productobj.status} </td> 
        <td>   <button  class="button" onclick="changeStatus('${productobj._id}')">Change</button></td>
        </tr>`;
            document.querySelector("#listOrders").innerHTML = content;
        } // window.location.href="list.html";
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
        orderObj.status = "delivered";
        axios.put(url, orderObj, { headers: { 'Authorization': basicAuth } }).then(res1 => {
            console.log("update status : " + res1.data);
            alert("Updated");
        }).catch(err => {
            console.log(err);
            alert("failed");
        })

    });
}
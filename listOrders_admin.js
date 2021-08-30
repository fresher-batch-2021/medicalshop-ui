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
        for (let product of productList) {
            console.log("Items", product);

        }
        let i = 0;
        for (let productobj of productList) {
            i = i + 1;
            // console.table(productobj.name);
            // console.table(productobj.productDetails);
            content =
                content +
                "<tr><td>" + i + "</td><td>" + productobj.name + "</td><td>" + productobj.phonenumber + "</td><td>" + productobj.date + "</td><td>" + productobj.status + "</td><td>" + productobj.Payment + "</td><td>" + productobj.productDetails[0].productName + "</td><td>" + productobj.productDetails[0].Price + "</td><td>" + productobj.productDetails[0].Quantity + "</td><td>" + productobj.totalAmount + "</td>";
            document.querySelector("#listOrders").innerHTML = content;
        } // window.location.href="list.html";
    }).catch(err => {
        console.log(err);
        alert("List failed");
    });

}
listData();
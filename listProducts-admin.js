function listData() {
    var content = "";

    const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_productlist/_all_docs?include_docs=true";
    axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
        let data = res.data.rows;
        let productList = data.map(obj => obj.doc);



        console.log(productList);

        let i = 0;
        for (let productobj of productList) {
            i = i + 1;

            deletebutton = `<button type="submit">Delete</button>`

            content = content + "<tr><td>" + i + "</td>" + "<td>" + productobj.productImage + "</td>" + "<td>" + productobj.productName + "</td>" + "<td>" + productobj.price + "<td>" + deletebutton + "</td>" + "</td></tr>";


            document.querySelector("#listProducts").innerHTML = content;
        }
        // window.location.href="list.html";
    }).catch(err => {
        console.log(err.response.data);
        alert("List failed");
    });

}
listData();
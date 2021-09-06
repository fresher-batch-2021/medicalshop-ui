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
            console.log(productobj._id);
            console.log(productobj._rev);
            content = content + `<tr>
            <td >   ${i} </td> 
            <td>   ${productobj.productImage}"  </td> 
            <td>   ${productobj.productName} </td>
            <td>   ${productobj.price} </td> 
            <td>   ${productobj.category} </td> 
            <td> <button class="button" onclick="deleteMedicine('${productobj._id}','${productobj._rev}')">Delete </button> <a class="button" href='editProducts_admin.html?id=${productobj._id}'>Edit</a></td>
            </tr>`;
        }
        $("#listProducts").html(content);
    }).catch(err => {
        console.log(err.response.data);
    });

}
listData();
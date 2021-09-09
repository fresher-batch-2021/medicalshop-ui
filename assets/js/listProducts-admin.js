function listData() {
    var content = "";
    adminService.getProducts().then(res => {
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
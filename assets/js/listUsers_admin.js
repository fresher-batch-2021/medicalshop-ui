function listData() {
    // alert("Train Listed successful 11");
    var content = "";

    adminService.getUsers().then(res => {
        let data = res.data.rows;
        let user_list = data.map(obj => obj.doc);
        console.log(user_list);
        let i = 0;
        for (let listUser of user_list) {
            i = i + 1;

            content = content + `<tr>
            <td >   ${i} </td>  
            <td>   ${listUser.name} </td>
            <td>   ${listUser.email} </td> 
            <td>   ${listUser.password} </td> 
            <td>   ${listUser.mobileNo} </td> 
            <td>   ${listUser.role} </td> 
          </tr>`;
            document.querySelector("#listUserDataAdm").innerHTML = content;
        }
    }).catch(err => {
        console.log(err.response.data);
        alert("Register failed");
    });

}
listData();
function listData() {
    // alert("Train Listed successful 11");
    var content = "";

    adminService.getUsers().then(res => {
        let data = res.data.rows;
        let user_list = data.map(obj => obj.doc);

        // alert("Train Listed successful");
        console.log(user_list);
        // alert("yes");
        //localStorage.setItem("Added_Train",JSON.stringify(res.data));
        //alert("added in local storage");
        let i = 0;
        for (let listUser of user_list) {
            i = i + 1;
            content = content + "<tr><td>" + i + "</td>" + "<td>" + listUser.name + "</td>" + "<td>" + listUser.email + "</td>" + "<td>" + listUser.password + "</td>" + "<td>" + listUser.mobileNo + "</td>" + "<td>" + listUser.role + "</td></tr>";
            document.querySelector("#listUserDataAdm").innerHTML = content;
        }
        // window.location.href="list.html";
    }).catch(err => {
        console.log(err.response.data);
        alert("Register failed");
    });

}
listData();
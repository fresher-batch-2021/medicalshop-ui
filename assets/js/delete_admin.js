function deleteMedicine(Id, revId) {
    console.log("delete movie", Id, revId);
    if (Id == null) {
        alert("Mobile Id is mandatory");
    } else {
        const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
        const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_productlist/" + Id + "?rev=" + revId;
        console.log(url);
        Swal.fire({
            title: 'Are you sure to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                adminService.deleteProducts(Id, revId)
                    .then(res => {
                        const data = res.data;
                        console.log(data);
                        console.log("Successfully Deleted");
                        listData();
                    })
                    .catch((err) => {
                        console.log(err.response.data);
                        console.log("Unable to delete Medicines" + Id);
                    })
            }
        })

    }
}
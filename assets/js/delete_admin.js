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
        axios
            .delete(url, { headers: { Authorization: basicAuth } })
            .then(res => {
                const data = res.data;
                console.log(data);
                console.log("Successfully Deleted");
            })
            .catch((err) => {
                console.log(err.response.data);
                console.log("Unable to delete Medicines" + Id);
            });
    }
}
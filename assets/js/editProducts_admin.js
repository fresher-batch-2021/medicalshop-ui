const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)
const id = urlParams.get('id');
console.log(id);

function editDetails(id) {
    console.log(id);
    const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = `https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_productlist/${id}`;
    axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
            console.log(res.data);
            const MedicineDetails = res.data;
            console.log(MedicineDetails);
            document.querySelector("#id").value = MedicineDetails._id;
            document.querySelector("#rev").value = MedicineDetails._rev;
            document.querySelector("#name").value = MedicineDetails.productName;
            document.querySelector("#imageurl").value;
            document.querySelector("#price").value = MedicineDetails.price;
        })
        .catch(err => console.error(err));
}
editDetails(id);

function modifyDetails() {
    let id = document.querySelector("#id").value;
    let rev = document.querySelector("#rev").value;
    const productName = document.querySelector("#name").value;
    const imageUrl = document.querySelector("#imageurl").value;
    const price = document.querySelector("#price").value;
    const productImage = imageUrl.substr(imageUrl.lastIndexOf("\\") + 1);
    console.log(productName)
    console.log(productImage)
    console.log(price)
    let productValues = {
        "_id": id,
        "_rev": rev,
        productName: productName,
        productImage: "images/" + productImage,
        price: price
    };
    console.log("details", productValues);
    const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = `https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_productlist/${id}`;

    axios.put(url, productValues, { headers: { Authorization: basicAuth } }).then(res => {
        console.log(productValues)
        alert("successfull");
        window.location.href = "listProducts_admin.html";
    }).catch(err => alert("error "))

}
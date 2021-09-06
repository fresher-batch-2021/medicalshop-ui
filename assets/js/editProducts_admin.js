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
                 $("#id").val(MedicineDetails._id);
                 $("#rev").val(MedicineDetails._rev);
                 $("#name").val(MedicineDetails.productName);
                 $("#imageurl").val();
                 $("#price").val(MedicineDetails.price);
                 $("#category").val(MedicineDetails.category);
             })
             .catch(err => console.error(err));
     }
     editDetails(id);

     function modifyDetails() {
         let id = $("#id").val();
         let rev = $("#rev").val();
         const productName = $("#medicineName").val();
         const imageUrl = $("#imageurl").val();
         const price = $("#price").val();
         const category = $("#category").val();
         const productImage = imageUrl.substr(imageUrl.lastIndexOf("\\") + 1);
         console.log(productName)
         console.log(productImage)
         console.log(price)
         let productValues = {
             "_id": id,
             "_rev": rev,
             productName: productName,
             productImage: "images/" + productImage,
             price: price,
             category: category
         };
         console.log("details", productValues);
         const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
         const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
         const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

         const url = `https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_productlist/${id}`;

         axios.put(url, productValues, { headers: { Authorization: basicAuth } }).then(res => {
             console.log(productValues)
             alert("successfull");
             listData();
             window.location.href = "listProducts_admin.html";
         }).catch(err => alert("error "))

     }
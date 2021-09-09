     const queryString = window.location.search;
     console.log(queryString);
     const urlParams = new URLSearchParams(queryString);
     console.log(urlParams)
     const id = urlParams.get('id');
     console.log(id);

     function editDetails(id) {
         adminService.getUpdateProduct().then(res => {
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
         const productName = $("#name").val();
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
         adminService.postUpdateProduct(productValues).then(res => {
             console.log(productValues)
             toastr.success("Updated successfully");
             setTimeout(function() {
                 listData();
                 window.location.href = "listProducts_admin.html";
             }, 3000);


         }).catch(err => alert("error "))

     }
$("#header").load("header.html");

      function displayitems() {
        let cartItems= [
          {SNo: 1,imgurl:"images/nivea.jpg",ProductName:"Nivea", Price:120,total:240},
          {SNo:2,imgurl:"images/vicks.jpg",ProductName:"Vicks",Price:80,total:80},
          {SNo:3,imgurl:"images/vicks.jpg",ProductName:"Dettol",Price:27,total:81},
          {SNo:4,imgurl:"images/vicks.jpg",ProductName:"Volini",Price:87,total:87}
        ];

        let content = " ";
        for (let cart of cartItems) {
           let deletebutton=`<a href="cart.html" onClick="deleteitem()" ><img src="images/delete.png" alt="show image"></a>`
           let quantity=` <input type="number" name="quantity" id="quantity" min="1" required>`
          content =
            content +
            "<tr><td>" + cart.SNo + "</td><td>" +cart.imgurl+"</td><td>" +cart.ProductName + "</td><td>" + cart.Price +"</td><td>"+ quantity+ "</td><td>" +cart.total +"</td><td>"+ deletebutton;
        }
        console.log(content);

        var subtotal=0;
        for (let i = 0; i < cartItems.length; i++)
         {
            subtotal += cartItems[i].total;
         }
         content+="<tr><td colspan='5'>SubTotal </td><td>Rs." + subtotal + "</td></tr>";
        console.log(subtotal);
        document.querySelector("#cart-table").innerHTML = content;
      }
      displayitems();
      function deleteitem()
      {
        let del=confirm("Do You want remove this item from cart");
        if(del)
        {
          alert("Successfully Deleted");
          window.location.href="task";
        }
        
      }
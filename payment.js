
function  paymentProcess()
      {
          event.preventDefault();
          const name=document.querySelector("#name").value;
          const street=document.querySelector("#street").value;
          const city = document.querySelector("#city").value;
          const state=document.querySelector("#state").value;
          const pincode=document.querySelector("#pincode").value;
          console.log(pincode);
        
          if(name == "" || name == null || name.trim() =="")
          {
            alert("Name cannot be null");
          }
          else if (street=="" || street==null || street.trim()=="")
          {
                 alert("Provide address Details");
          }
          else if (city=="" || city==null || city.trim()=="")
          {
                 alert("city Name cannot be null");
          }
          else if (state=="" || state==null || state.trim()=="")
          {
                 alert("State Name cannot be null");
          }

          else if(pincode.length !=6)
          {
                alert("Pincode is not valid");
          }
          else
          {
            const addressobj={
  
              "name":name,
              "street":street,
              "city":city,
              "state":state,
              "pincode": pincode
             };
           
            localStorage.setItem("paymentaddress",JSON.stringify(addressobj));
          alert("Order placed");
          window.location.href="order.html";  
          }   
          
      }
     
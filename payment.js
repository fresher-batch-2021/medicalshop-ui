$("#header").load("header.html")  ;
function  paymentProcess()
      {
          event.preventDefault();
          const name=document.querySelector("#name").value;
          const address=document.querySelector("#address").value;
          const city = document.querySelector("#city").value;
          const state=document.querySelector("#state").value;
          const pincode=document.querySelector("#pincode").value;
          const paymentModes = document.querySelectorAll("#paymentMode");
          let selectedPaymentMode;
          paymentModes.forEach(rd=>{
              if(rd.checked){
                  selectedPaymentMode = rd.value;
              }
          })
          if(name == "" || name == null || name.trim() =="")
          {
            alert("Name cannot be null");
          }
          else if (address=="" || address==null || address.trim()=="")
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
          else if (selectedPaymentMode == null || selectedPaymentMode ==""){
            alert("Please select Payment Mode");
          }
          else
          {
          console.log(selectedPaymentMode);  
          alert("Order placed");
          window.location.href="index.html";  
          }   
         
      }
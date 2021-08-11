$("#header").load("header.html")  ;
function  register()
 {
     event.preventDefault();
     const name=document.querySelector("#name").value;
     const email=document.querySelector("#email").value;
     const mobileNo=document.querySelector("#mobileNo").value;
     const password=document.querySelector("#password").value;
     const confirmpassword=document.querySelector("#confirmpassword").value;
     if(name=="" || name==null || name.trim()=="")
     {
       alert("Name cannot be null");
     }
     else if (password.length<8)
     {
            alert("Password must be greater than 8 characters");
     }
     else if (password !=confirmpassword)
     {
            alert("confirm Password must be equal to password");
     }
     else if(mobileNo.length != 10)
     {
           alert("MobileNumber is not valid");
     }
     else
     {
        const userobj={
         "name":name,
         "email":email,
         "mobileNo":mobileNo,
         "password":password,
         "confirmpassword":confirmpassword
        };
            console.log(userobj);
            const url="https://product-mock-api.herokuapp.com/medicalapp/api/v1/auth/register";
            axios.post(url,userobj).then(res=>
            {
                let data=res.data;
                console.log(data);
                alert("successfully register");
                window.location.href="login.html";
            }) .catch(err=>
            {
                console.error("err");
                alert("error");
            });
            
            
     }
    
   
 }
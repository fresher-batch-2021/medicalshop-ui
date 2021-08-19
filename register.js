$("#header").load("header.html")  ;
function  register()
 {
     event.preventDefault();
     const name=document.querySelector("#name").value;
     const email=document.querySelector("#email").value;
     const mobileNo=document.querySelector("#mobileNo").value;
     const password=document.querySelector("#password").value;
     const confirmPassword=document.querySelector("#confirmPassword").value;
     try{

     
        RegisterValidation.validate(name,email,mobileNo,password,confirmPassword)
     
     
        const userobj={
         "name":name,
         "email":email,
         "mobileNo":mobileNo,
         "password":password,
         "confirmPassword":confirmPassword
        };
            console.log(userobj);
        
            userService.register(userobj).then(res=>
        {
            let data=res.data;
            console.log(data);
            alert("successfully register");
            window.location.href="login.html";
        }) .catch(err=>
        {   console.error(err.response.data);
            alert("error");
        });
    }
        catch(err)
        {
            console.error(err.message);
            alert("error"+err.message);
        }
 }


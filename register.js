$("#header").load("header.html")  ;
function  register()
 {
     event.preventDefault();
     const name=document.querySelector("#name").value;
     const email=document.querySelector("#email").value;
     const mobileNo=document.querySelector("#mobileNo").value;
     const password=document.querySelector("#password").value;
     const confirmPassword=document.querySelector("#confirmPassword").value;
     if(name=="" || name==null || name.trim()=="")
     {
       alert("Name cannot be null");
     }
     else if (password.length<8)
     {
            alert("Password must be greater than 8 characters");
     }
     else if (password !=confirmPassword)
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
         "confirmPassword":confirmPassword
        };
            console.log(userobj);
            registerUser(userobj);
           
           
            
            
     }
    
   
 }

 function registerUser(userobj){
     
    const dbUsername="apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
    const dbPassword="cb14c8c9976ced0867c79d8eb625505a";
    const basicAuth='Basic ' + btoa(dbUsername + ':' + dbPassword);
    console.log(basicAuth);
    const url="https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users";
  

    axios.post(url,userobj,{ headers :{ 'Authorization':basicAuth }}).then(res=>
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
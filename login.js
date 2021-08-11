$("#header").load("header.html")  ;
function  login()
{
    event.preventDefault();
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
        if (password.length < 8)
        {
            
          alert("password must be greater than 8 characters");
        }
        else
        { 
         const userobj={
  
        "email":email,
        "password":password
       };
          console.log(userobj);
           const url="https://product-mock-api.herokuapp.com/medicalapp/api/v1/auth/login";
           axios.post(url,userobj).then(res=>
           {
               let data=res.data;
               console.log(data);
               alert("successfully logged in");
               window.location.href="index.html";
           }) .catch(err=>
           {
               console.error("err");
               alert("Incorrect Password");
           });
          
          
        }

  
   
}

class RegisterValidation
{
    static validate(name,email,mobileNo,password,confirmPassword)
    {
        if(name=="" || name==null || name.trim()=="")
     {
       throw new Error("Name cannot be null");
     }
     else if(email==""|| email==null ||email.trim()=="")
         {
          throw new Error("please Enter a Valid Email ID ")
     }
     else if (password.length<8)
     {
            throw new Error("Password must be greater than 8 characters");
     }
     else if (password !=confirmPassword)
     {
            throw new Error("confirm Password must be equal to password");
     }
     else if(mobileNo.length != 10)
     {
           throw new Error("MobileNumber is not valid");
     }
    }
}
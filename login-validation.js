class LoginValidation
{
    static validate(email,password)
    {
        if(password.length < 8)
        {
        throw new Error("invalid credentials");
    }
}
}
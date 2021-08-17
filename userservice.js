const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users/_find";
class userService
{
    static login(email, password)
    {
        
   
const requsetData = {
    selector: {
        email: email,
        password: password
    },
    fields: ["_id", "name", "email"],
};
console.log(requsetData);
;
return axios.post(url, requsetData, { headers: { 'Authorization': basicAuth } })
}
static register(userobj)
{
const url="https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users";
return axios.post(url,userobj,{ headers :{ 'Authorization':basicAuth }});
}

}
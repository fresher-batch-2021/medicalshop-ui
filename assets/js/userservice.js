const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users/_find";
class userService {
    static login(email, password, role) {
        const requsetData = {
            selector: {
                email: email,
                password: password,
                role: role
            },
            fields: ["_id", "name", "email", "role"],
        };
        console.log(requsetData);
        return axios.post(url, requsetData, { headers: { 'Authorization': basicAuth } })
    }
    static register(userobj) {
        const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users";
        return axios.post(url, userobj, { headers: { 'Authorization': basicAuth } });
    }
    static order(orderNow) {
        const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_orders";

        return axios.post(url, orderNow, { headers: { 'Authorization': basicAuth } });
    }
    static getAllOrders() {
        const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_orders/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }


}
const dbUsername = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
const dbPassword = "cb14c8c9976ced0867c79d8eb625505a";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users/_find";
class adminService {
    static getUsers() {
        const url = "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud/medicalshop_users/_all_docs?include_docs=true";
        return axios.get(url, { headers: { Authorization: basicAuth } });
    }


}
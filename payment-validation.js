class paymentValidation {
    static validate(name, street, state, pincode, phonenumber) {
        if (name == "" || name == null || name.trim() == "") {
            throw new Error("Name cannot be null");
        } else if (phonenumber.length < 10) {
            throw new Error("please Enter a Valid Number");
        } else if (date == "" || date == null) {
            throw new Error("please Enter a Valid Date");
        } else if (street == "" || street == null || street.trim() == "") {
            throw new Error("please Enter a Valid address ")
        } else if (state == "" || state == null || state.trim() == "") {
            throw new Error("please Enter a Valid state ");
        } else if (pincode.length != 6) {
            throw new Error("pincode length must be equal to 6");

        }
    }
}
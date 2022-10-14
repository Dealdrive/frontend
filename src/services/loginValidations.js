import Validator from "./validator";

class loginValidations{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    checkValidations(){
        let error=''

        if(!Validator.validateEmail(this.email)){
            error={...error, email:"Email is require"}
        }

        if(!Validator.validatePassword(this.password)){
            error={...error, password:"Password is require"}
        }

        return error
    }
}


export default loginValidations
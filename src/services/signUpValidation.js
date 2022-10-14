import Validator from "./validator";

class signUpValidation{
    constructor(fullname,email,password,confirmpassword){
        this.fullname=fullname
        this.email=email;
        this.password=password
        this.confirmpassword=confirmpassword
    }


    checkValidations(){
        let error=''

        if(!Validator.validateFullname(this.fullname)){
            error={...error, fullname:"Fullname is require"}
        }

        // Email
        if(!Validator.validateEmail(this.email)){
            error={...error, email:"Email is require"}
        }
        else if(!Validator.validateEmailChar(this.email)){
            error={...error, email:"Input email is invalid"}
        }

        // Password
        if(!Validator.validatePassword(this.password)){
            
            error={...error, password:"Password is require"}
        }

        else if (!Validator.validatePasswordLength(this.password, 6)) {
            error={...error, password:"Password  require length 6 character"}
        }

        else if (!Validator.validatePasswordLowerCase(this.password)) {
            error={...error, password:"Password  most contain atleast one lower case"}
        }

        else if (!Validator.validatePasswordUpperCase(this.password)) {
            error={...error, password:"Password  most contain atleast one upper case"}
        }
        
        else if (!Validator.validatePasswordNumeric(this.password)) {
            error={...error, password:"Password  most contain atleast one digit"}
        }

        else if (!Validator.validatePasswordSpeacialChar(this.password)) {
            error={...error, password:"Password  most contain atleast one special character"}
        }

        if(!Validator.validateConfirmPassword(this.password,this.confirmpassword)){
           
            error={...error, confirmpassword:"Comfirm password does not match"}
        }

        return error
    }
}


export default signUpValidation
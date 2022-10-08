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

        if(!Validator.validateEmail(this.email)){
            error={...error, email:"Email is require"}
        }

        
        if(!Validator.validatePassword(this.password)){
            
            error={...error, password:"Password is require"}
        }

        else if (!Validator.validatePasswordLength(this.password, 6)) {
            error={...error, password:"Password  require length 6 character"}
        }
        

        if(!Validator.validateConfirmPassword(this.password,this.confirmpassword)){
           
            error={...error, confirmpassword:"Comfirm password does not match"}
        }

        return error
    }
}


export default signUpValidation
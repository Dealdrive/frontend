class Validator{

    // Email validators
    static validateEmail(email){
        if(email===''){
            return false
        }
        return true
    }

    static validateEmailChar(email){
        if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email) ){
            return true
        }
        return false
    }

    // Password validator
    static validatePassword(password){
        if(password===''){
            
            return false
        }
        return true
    }


    static validatePasswordLowerCase(password){
        if (password.search(/[a-z]/)<0) {
            return false
        }
        return true 
    }

    static validatePasswordUpperCase(password){
        if (password.search(/[A-Z]/)<0) {
            return false
        }
        return true
    }

    static validatePasswordNumeric(password){
        if (password.search(/[0-9]/)<0) {
            return false
        }
        return true
    }

    static validatePasswordSpeacialChar(password){
        if (password.search(/[!@#\$%\^&\*_]/)<0) {
            return false
        }
        return true
    }


    static validateConfirmPassword(password,confirmpassword){
        if(password !== confirmpassword){
            
            return false
        }
        return true
    }

    
    static validatePasswordLength(password, minLength){
        if (password.length < minLength) {
            return false
        }
        return true
    }

    // Fullname validator
    static validateFullname(fullname){
        if(fullname===''){
            return false
        }
        return true
    }
}

export default Validator
class Validator{
    static validateEmail(email){
        if(email===''){
            return false
        }
        return true
    }

    static validatePassword(password){
        if(password===''){
            
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

    static validateFullname(fullname){
        if(fullname===''){
            return false
        }
        return true
    }
}

export default Validator
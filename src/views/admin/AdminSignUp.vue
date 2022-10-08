<template>
    <div >

        <BaseModal :showButton=false>
            
        <h1 class="title">Register Admin</h1>
    
           <form class="mt-8" @submit="register">

            <div
                v-if="errors && Object.keys(errors).length"
                class="alert alert-danger"
            >
                <div v-for="(field, i) of Object.keys(errors)" :key="i">
                <div v-for="(error, ind) of errors[field] || []" :key="ind">
                    * {{ error }}
                </div>
                </div>
            </div>
            <input type="hidden" name="remember" value="true" />
            <input
            name="name"
            v-model="user.name"
            :errors="errors"
            placeholder="Full Name"
            />

            <span class="danger" v-if="errorMsg.fullname">{{errorMsg.fullname}}</span>

            <input
            type="email"
            name="email"
            v-model="user.email"
            :errors="errors"
            placeholder="Email Address"
            />

            <span class="danger" v-if="errorMsg.email">{{errorMsg.email}}</span>

            <input
            type="password"
            name="password"
            v-model="user.password"
            :errors="errors"
            placeholder="Password"
            />

            <span class="danger" v-if="errorMsg.password">{{errorMsg.password}}</span>


            <input
            type="password"
            name="password_confirmation"
            v-model="user.confirmPassword"
            :errors="errors"
            placeholder="Confirm Password"
            />
            <span class="danger" v-if="errorMsg.confirmpassword">{{errorMsg.confirmpassword}}</span>
            
            <button type="submit" class="success">Register</button>

        </form>
        </BaseModal>
    </div>
</template>

<script setup>
import signValidations from '../../services/signUpValidation'

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseModal from '../../components/BaseModal.vue';


const store = useStore();

const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
  confirmPassword:""
};

const loading = ref(false);

const errors = ref({});
const errorMsg =ref([])

function register(ev) {
  ev.preventDefault();
//   form validation
let validation =new signValidations(user.name, user.email, user.password, user.confirmPassword)

errorMsg.value =validation.checkValidations()


if(errorMsg.value.fullname || errorMsg.value.email || errorMsg.value.password ||  errorMsg.value.confirmpassword){
    return false
}

// signUp Registration
  loading.value = true;
  store
    .dispatch("register", user)
    .then((data) => {

        if(data.token){
            // console.log(errors, ' errors ');
            console.log(data, data.token);

            loading.value = false;

            errors.value = {};

            router.push({
                name: "adminDashBoard",
            });

        }else{
            errors.value = data.data;
        }
        
    })
    .catch((error) => {
        // console.log(error);
    
      loading.value = false;

      if (error.success === false) {
        errors.value = error.data;
      }

    });

}


</script>

<style  scoped>





.title{
    text-align: center;
}
.success{
    background-color: green;
}
form{
    width: 50%;
    margin: 0 auto;
}
form input,button{
    width: 100%;
    margin-top: 2em;
}
input{
    padding: 1em;
    
}
form button{
    width: 100%;
    margin-bottom: 2em;
    padding: .2em;
    font-size: 2rem;
}

</style>
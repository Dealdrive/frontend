<template>
    <div id="wrapper">
        <BaseModal :showButton=false>
            
            <h1 class="title">Login</h1>
           
            <span v-if="errorMsg"
                @click="errorMsg = ''"
                class="alert alert-danger"
            >
               {{ errorMsg }}
            </span>
            <form @submit="login" method="POST">
               
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="email"
                       
                        v-model="user.email"
                        placeholder="Email address"
                        />

                        <span v-if="error.email" class="danger">{{error.email}}</span>
                

                
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            
                            v-model="user.password"
                            placeholder="Password"
                        />
                        <span v-if="error.password" class="danger">{{error.password}}</span>
                
         
                <button type="submit" class="success">Save</button>

            </form>
        </BaseModal>
    </div>
</template>

<script setup>
import loginValidations from '../../services/loginValidations'
import BaseModal from '../../components/BaseModal.vue';
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from 'vuex';

const router = useRouter();

const store = useStore();

const user = {
  email: "",
  password: "",
};
let loading = ref(false);

let errorMsg = ref("");
let error=ref([]);

// login funtion
function login(ev) {

  ev.preventDefault();

//   validating form
    let validations=new loginValidations(user.email, user.password)
    error.value=validations.checkValidations()

    if('email' in error || 'password' in error){
        return false
    }

// login

  loading.value = true;

  store
    .dispatch("login", user)
    .then(() => {
      loading.value = false;
      router.push({
        name: "adminDashBoard",
      });
    })
    .catch((err) => {
    
      loading.value = false;
      errorMsg.value = err.response.data.error;
    });
}

</script>

<style scoped>

#wrapper{
    margin-top: 7em;
}


.title{
    text-align: center;
}
.success{
    background-color: green;
}

form{
    padding: 0 1em;
}
form input,button{
    width: 100%;
   
}
input{
    height: 3em;
    margin: 2em 0;
}
form button{
    width: 100%;
    margin-top: 2em;
    padding: .2em;
    font-size: 2rem;
}


</style>
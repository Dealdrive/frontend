<template>
    <div id="wrapper">
        <BaseModal :showButton=false >
            
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
                    required=""
                    v-model="user.email"
                    placeholder="Email address"
                    />

                <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    v-model="user.password"
                    placeholder="Password"
                />
         
                <button type="submit" class="success">Save</button>

            </form>
        </BaseModal>
    </div>
</template>

<script setup>

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

function login(ev) {

  ev.preventDefault();

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
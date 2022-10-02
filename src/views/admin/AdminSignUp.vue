<template>
    <div >
        <BaseModal :showButton=false>
        <h1 class="title">Register Admin</h1>

        <form action="">
            <input type="text" name="" id="" placeholder="Fullname">
        
            <input type="email" name="" id="" placeholder="Email">
            <input type="Username" name="" id="" placeholder="Username">

            <input type="password" name="" id="" placeholder="password">

            <input type="password" name="" id="" placeholder="Confirm password">


            <button type="submit" class="success">Register</button>


        </form>
        </BaseModal>
    </div>
</template>

<script setup>
import BaseModal from '../../components/BaseModal.vue';


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
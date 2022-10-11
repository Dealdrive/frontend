<template>
    <div>
        <div class="d-flex flex-row justify-content-between">

            <h1 class="section-title">About Us Section</h1>

        </div>

        <table style="width:100%">
            <tr>
                <th>Heading</th>
                <th>Short Description</th>
                <th>Lists</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>{{about.heading}}</td>
                <td>{{about.short_desc}}</td>
                <td>
                    <p v-for="list in about.list" :key="list">
                        {{ list }}
                    </p>
                </td>
                

                <td><img style="width:100px; hieght:100px" :src="about.image" alt="About us image"></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(about.id)">Edit</button>
                        <button class="danger" @click="deleteData(about.id)">Delete</button>
                     </div> 
                </td>
                <BaseModal v-if="showModal && currentModalIndex == about.id" @closeModal="toggleModal(about.id)">
                    <h1 class="title">About Us Edit Form </h1>

                    <form id="updateAboutUs" @submit="updateData(about.id)">
                        
                        <img :src="about.image" alt="Current Slide Image" width="100" height="100">

                        <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                        
                        <input name="heading" type="text" placeholder="About Heading" :value="about.heading">
                        
                        <input name="short_desc" type="text" placeholder="Short description" :value="about.short_desc">

                        <textarea v-for="(list,index) in about.list" :key="list" :name="'list_'+index+1" id="" cols="30" rows="10" :placeholder="'List ' +index+1" :value="list"></textarea>

                        <button type="submit" class="success">Save</button>

                    </form>
                </BaseModal>
            </tr>

            
        </table>


        
    </div>
</template>


<script setup>

import {computed, ref} from 'vue'
import { useStore } from 'vuex';
import BaseModal from '../../components/BaseModal.vue';

const store = useStore();

const about = computed(() => {
    return store.state.about;
});

store.dispatch('getData', 'about');


let showModal=ref(false);

let currentModalIndex = ref(null);


function handleFileUpload(event){
    about.image = event.target.files[0];
}


function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `deleteAboutUs/${id}`)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });
}


function updateData(id){

    const form = document.querySelector('form#updateAboutUs');
    
    let formData = new FormData(form);

    const data = {
        key: `updateAboutUs/${id}`,
        payload: formData
    }

    store.dispatch('updateFormData', data)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });

}


</script>


<style scoped>
input::placeholder{
    font-size: 1.4rem;
}
.title{
    text-align: center;
}
.success{
    background-color: green;
}
form input,textarea{
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
div>h1{
    text-align: center;
}
/* Table */
table,tr,td,th{
    border: 1px solid #aaa;
}

tr th{
  text-align: center; 
}
tr td{
    text-align: justify;
    padding: .8em;
}

</style>
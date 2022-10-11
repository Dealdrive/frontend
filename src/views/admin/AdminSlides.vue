<template>
    <div>
        <div class="d-flex flex-row justify-content-between">
            <h1 class="section-title">Slide Section</h1>
            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create Slide</button>
            
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                <h1 class="title">Create Slide</h1>

                <form id="createSlide" @submit="createData">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                            
                    <input name="title" type="text" placeholder="Title">

                    <textarea name="caption" id="" cols="30" rows="10" placeholder="Caption"></textarea>

                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>
        </div>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Caption</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr v-for="slide in slides" :key="slide.id">
                <td>{{slide.id}}</td>
                <td>{{slide.title}}</td>

                <td>{{slide.caption}}</td>
                <td><img style="width:100px; hieght:100px" :src='slide.image' :alt="slide.title+ ' Image'"></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(slide.id)">Edit</button>
                        <button class="danger" @click="deleteData(slide.id)">Delete</button>
                     </div> 
                </td>
                 <BaseModal v-if="showModal && currentModalIndex == slide.id" @closeModal="toggleModal(slide.id)">
                    <h1 class="title">Slide Edit Form {{slide.title}}</h1>

                    <form id="updateSlide" @submit="updateData(slide.id)">

                        <img :src="slide.image" alt="Current Slide Image" width="100" height="100">

                        <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                               
                        <input name="title" type="text" placeholder="Title" :value="slide.title">

                        <textarea name="caption" id="" cols="30" rows="10" placeholder="Caption" :value="slide.caption"></textarea>

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

const slides = computed(() => {
    return store.state.slides;
});

store.dispatch('getData', 'slides');


let showModal=ref(false);

let currentModalIndex = ref(null);


function handleFileUpload(event){
    slide.image = event.target.files[0];
}


function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `deleteSlide/${id}`)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createSlide');
    
    let formData = new FormData(form);

    const data = {
        key: 'createSlide',
        payload: formData
    }

    store.dispatch('postFormData', data)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });

}

function updateData(id){

    const form = document.querySelector('form#updateSlide');
    
    let formData = new FormData(form);

    const data = {
        key: `updateSlide/${id}`,
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
div p{
    text-align: justify;
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
<template>
    <div>
       <div class="d-flex flex-row justify-content-between">

            <h1 class="section-title">Testimonials Section</h1>

            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create Testimonial</button>
            
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                <h1 class="title">Create Testimonial</h1>

                <form id="createTestimonial" @submit="createData">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                            
                    <input name="star" type="number" placeholder="rating from 1 to 5">

                    <input name="title" type="text" placeholder="Title">

                    <input name="author" type="text" placeholder="Author">

                    <textarea name="description" id="" cols="30" rows="10" placeholder="Main Description"></textarea>

                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>
        </div>
         <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Stars</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr v-for="testimonial in testimonials" :key="testimonial.id">
                <td>{{testimonial.id}}</td>
                <td>{{testimonial.star}} / 5</td>

                <td>{{testimonial.title}}</td>
                <td>{{testimonial.author}}</td>
                <td>{{testimonial.description}}</td>
                <td><img style="width:100px; hieght:100px" :src="testimonial.image" :alt="testimonial.author + ' Image'"></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(testimonial.id)">Edit</button>
                        <button class="danger" @click="deleteData(testimonial.id)">Delete</button>
                     </div> 
                </td>
                <BaseModal v-if="showModal && currentModalIndex == testimonial.id" @closeModal="toggleModal(testimonial.id)">

                    <h1 class="title">Edit Testimonial {{ testimonial.author }}</h1>

                    <form id="updateTestimonial" @submit="updateData(testimonial.id)">

                        <img :src="testimonial.image" alt="Current Image" width="100" height="100">

                        <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                                
                        <input name="star" type="number" placeholder="Rating from 1 to 5" :value="testimonial.star">

                        <input name="title" type="text" placeholder="Title" :value="testimonial.title">

                        <input name="author" type="text" placeholder="Author" :value="testimonial.author">

                        <textarea name="description" id="" cols="30" rows="10" placeholder="Main Description" :value="testimonial.description"></textarea>

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

const testimonials = computed(() => {
    return store.state.testimonials;
});

store.dispatch('getData', 'testimonials');


let showModal=ref(false);

let currentModalIndex = ref(null);


function handleFileUpload(event){
    testimonial.image = event.target.files[0];
}


function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `deleteTestimonial/${id}`)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createTestimonial');
    
    let formData = new FormData(form);

    const data = {
        key: 'createTestimonial',
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

    const form = document.querySelector('form#updateTestimonial');
    
    let formData = new FormData(form);

    const data = {
        key: `updateTestimonial/${id}`,
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
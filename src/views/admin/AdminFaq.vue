<template>
    <div>
         <div class="d-flex flex-row justify-content-between">
            <h1 class="section-title">FAQ Section</h1>
            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create FAQ</button>
            
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                <h1 class="title">Create FAQ</h1>

                <form id="createFAQ" @submit="createData">
                    
                    <textarea name="question" id="" cols="30" rows="10" placeholder="Question"></textarea>

                    <textarea name="answer" id="" cols="30" rows="10" placeholder="Answer"></textarea>

                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>
        </div>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Actions</th>
            </tr>

            <tr v-for="faq in faqs" :key="faq.id">
                <td>{{ faq.id }}</td>
                <td>{{ faq.question }}</td>

                <td>{{ faq.answer }}</td>

                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(faq.id)">Edit</button>
                        <button class="danger" @click="deleteData(faq.id)">Delete</button>
                     </div> 
                </td>
                <BaseModal v-if="showModal && currentModalIndex == faq.id" @closeModal="toggleModal(faq.id)">
                    
                    <h1 class="title">FAQ Edit Form </h1>

                    <form id="updateFAQ" @submit="updateData(faq.id)">

                        <textarea name="question" id="" cols="30" rows="10" placeholder="Question" :value="faq.question"></textarea>

                        <textarea name="answer" id="" cols="30" rows="10" placeholder="Answer" :value="faq.answer"></textarea>

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

const faqs = computed(() => {
    return store.state.faqs;
});

store.dispatch('getData', 'faqs');


let showModal=ref(false);

let currentModalIndex = ref(null);

function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `deleteFAQ/${id}`)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createFAQ');
    
    let formData = new FormData(form);

    const data = {
        key: 'createFAQ',
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

    const form = document.querySelector('form#updateFAQ');
    
    let formData = new FormData(form);

    const data = {
        key: `updateFAQ/${id}`,
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
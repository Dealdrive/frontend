<template>
    <div>
        <div class="d-flex flex-row justify-content-between">
            <h1 class="section-title">Project Section</h1>
            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create Project</button>
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                    <h1 class="title">Create Project</h1>

                    <form id="createProject" @submit="createData">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                                        
                    <select name="class" id="">
                        <option value="">---Select Class---</option>
                        <option v-for="category in project_categories" :key="category.id" :value="category.class">{{category.name}}</option>
                        
                    </select>

                    <input name="name" type="text" placeholder="Name">

                    <textarea name="desc" id="" cols="30" rows="10" placeholder="Description"></textarea>

                    <textarea name="full_desc_aim" id="" cols="30" rows="10" placeholder="Full-desc Aim"></textarea>

                    <textarea name="full_desc_gap" id="" cols="30" rows="10" placeholder="Full-desc Gap"></textarea>

                    <textarea name="full_desc_solution" id="" cols="30" rows="10" placeholder="Full-desc Solution"></textarea>

                    <textarea name="full_desc_optimization" id="" cols="30" rows="10" placeholder="Full-desc Optimization"></textarea>

                    <textarea name="result_title" id="" cols="30" rows="10" placeholder="Result Title"></textarea>

                    <textarea name="result_data_1" id="" cols="30" rows="5" placeholder="Result Data 1"></textarea>
                    
                    <textarea name="result_data_2" id="" cols="30" rows="5" placeholder="Result Data 2"></textarea>
                
                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>
        </div>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Class</th>
                <th>Name</th>
                <th>Short Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr v-for="project in projects" :key="project.id">

                <td>{{project.id}}</td>

                <td>{{project.class}}</td>

                <td>{{project.name}}</td>

                <td>{{project.desc}}</td>

                <td><img style="width:100px; hieght:100px" :src="project.image" :alt="project.name + ' Image'"></td>

                <td> 
                   <div class="button-section">
                        <button class="info" @click="toggleModal(project.id)">Edit</button>
                        <button class="danger" @click="deleteData(project.id)" >Delete</button>
                     </div> 
                </td>
                <BaseModal v-if="showModal && currentModalIndex == project.id" @closeModal="toggleModal(project.id)">

                    <h1 class="title">Edit Project {{project.name}}</h1>

                    <form id="updateProject" @submit="updateData(project.id)">

                    <img :src="project.image" alt="Current Project Image" width="100" height="100">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                                        
                    <select name="class" id="">

                        <option value="">---Select Class---</option>

                        <option v-for="category in project_categories" :key="category.id" :value="category.class" :selected="project.class == category.class">{{category.name}}</option>
                    
                    </select>

                    <input name="name" type="text" placeholder="Name" :value="project.name">

                    <textarea name="desc" id="" cols="30" rows="10" placeholder="Description" :value="project.desc"></textarea>

                    <textarea name="full_desc_aim" id="" cols="30" rows="10" placeholder="Full-desc Aim" :value="project.full_desc.aim"></textarea>

                    <textarea name="full_desc_gap" id="" cols="30" rows="10" placeholder="Full-desc Gap" :value="project.full_desc.gap"></textarea>

                    <textarea name="full_desc_solution" id="" cols="30" rows="10" placeholder="Full-desc Solution" :value="project.full_desc.solution"></textarea>

                    <textarea name="full_desc_optimization" id="" cols="30" rows="10" placeholder="Full-desc Optimization" :value="project.full_desc.optimization"></textarea>

                    <textarea name="result_title" id="" cols="30" rows="10" placeholder="Result Title" :value="project.full_desc.result.title"></textarea>

                    <textarea name="result_data_1" id="" cols="10" rows="10" placeholder="Result Data 1" :value="project.full_desc.result.data[0]"></textarea>
                    
                    <textarea name="result_data_2" id="" cols="10" rows="10" placeholder="Result Data 2" :value="project.full_desc.result.data[1]"></textarea>
                
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

const projects = computed(() => {
    return store.state.projects;
});

const project_categories = computed(() => {
    return store.state.project_categories;
})

// store.dispatch('getData', 'projects');

let showModal=ref(false);

let currentModalIndex = ref(null);

function handleFileUpload(event){
    project.image = event.target.files[0];
}

function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `deleteProject/${id}`)
        .then((data) => {
            console.log(data, ' data ');
        }).catch((e) => {
            console.log(e);
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createProject');
    
    let formData = new FormData(form);

    const data = {
        key: 'createProject',
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

    const form = document.querySelector('form#updateProject');
    
    let formData = new FormData(form);

    const data = {
        key: `updateProject/${id}`,
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
form input,textarea,select{
    width: 100%;
    margin-top: 2em;
}
input,select{
    padding: 1em;
    
}
select option{
    padding: 2em;
}
form button{
    width: 100%;
    margin-bottom: 2em;
    padding: .2em;
    font-size: 2rem;
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
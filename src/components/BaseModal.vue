<template>
    <!-- <Teleport to="body"> -->
        <div class="modal">
        <div class="modal-content">
            <div v-show="showButton">
                
                <button @click="$emit('closeModal')">Close</button>
            </div>
            <slot ></slot>

        </div>
    </div>
    <!-- </Teleport> -->
    
</template>

<script setup>
    import { ref } from "vue";

    

    defineProps({
        showButton:{
            type:Boolean,
            default:true
        }
})

</script>

<style scoped>
.modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: black;
    opacity: .9;
    z-index: 10;

    display: flex;
    justify-content: center;
    
}
.modal-content{
    background-color: white;
    width: auto;
    height: auto;
    margin: 3em auto;
    padding: .9em;
    opacity: 0.9;
    z-index: 10;
}

button{
    display: inline;
    background-color: hsl(39, 94%, 62%);
}
</style>
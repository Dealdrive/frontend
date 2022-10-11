<template>

<div id="demo" class="carousel slide slant" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button v-for="slide in slides" :key="slide.id" type="button" data-bs-target="#demo" :data-bs-slide-to="slide.id" :class="slide.id == 0 ? 'active' : 'not-active'"></button>
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div v-for="slide in slides" :style="{'background-image':`linear-gradient(to right, rgba(16, 25, 136, .8), rgba(38, 84, 156, 0.6)), url(${slide.image})`}" :key="slide.id" :class="[slide.id == 1 ? 'active':'not-active' ,'carousel-item']">
      <div class="carousel-caption text-white">
        <h3>{{slide.title}}</h3>
        <p class="col-md-6 mx-auto">{{slide.caption}}</p>
        <button v-if="slide.id == 1" data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
        <router-link :to="{name: 'Training'}" v-if="slide.id == 2" type="button" class="px-4 py-2 btn-get-started modal-btn scrollto">Enroll Now.</router-link>
      </div>
    </div>
   
  </div>
  
  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev text-primary" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
  
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const slides = computed(() => {
  return store.state.slides;
});

store.dispatch('getData', 'slides');


</script>

<style scoped>
  section.carousel{
    padding: 0 !important;
  }
  .carousel-caption{
    right: 0 !important;
    top: 0% !important;
    left: 0% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .carousel-caption h3{
    font-weight: bold;
    color: whitesmoke;
    font-size: 2rem;
  }
  .carousel-caption p{
    font-weight: bold;
    color: white;
    font-size: 1rem;
    
  }
  .carousel-caption button{
    background: #f3136bcc;
    color: white;
    padding: 1rem;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  .carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.btn-get-started{
  background-color: #e49300 !important;
}

.slant {
      clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
      animation: upanddown 5s ease-in-out infinite alternate-reverse;
    }
  #demo{
    margin-top: 100px;
  }

@keyframes upanddown {
    0% {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75vh);
    }
    100% {
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
}
</style>

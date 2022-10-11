<template>
    <div>
      <!-- ======= Testimonials Section ======= -->
       <div class="section-header">
            <span>Testimonials</span>
            <h2>Testimonials</h2>

        </div>
      <div class="carousel slide mt-5  bg-grey" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <button v-for="testimonial in testimonials" :key="testimonial.id" type="button" data-bs-target="#demo" :data-bs-slide-to="testimonial.id" :class="testimonial.id == 1 ? 'active' : 'not-active'"></button>
        </div>
        
        <!-- The slideshow/carousel -->
            <div class="carousel-inner">
                <div v-for="testimonial in testimonials" :key="testimonial.id" :class="[testimonial.id == 1 ? 'active':'not-active' ,'carousel-item pt-3']">
                    <img 
                        class="rounded-circle shadow-1-strong mb-4"
                        :src="testimonial.image" alt="avatar"
                        style="width: 150px; height: 150px;" />
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <h5 class="mb-3">{{testimonial.author}}</h5>
                            <p>{{testimonial.title}}</p>
                            <p class="text-muted">
                                <i class="fas fa-quote-left pe-2"></i>
                                {{testimonial.description}}
                            </p>
                        </div>
                    </div>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li v-for="star in parseInt(testimonial.star)" :key="star"><i class="fas fa-star fa-sm"></i></li>
                        
                        <li v-for="star in parseInt((5 - parseInt(testimonial.star)))" :key="star"><i class="far fa-star fa-sm"></i></li>
                    </ul>
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
    </div>

</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const testimonials = computed(() => {
  return store.state.testimonials;
});

store.dispatch('getData', 'testimonials');


</script>

<style scoped>
 
</style>

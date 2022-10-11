<script setup>
import { ref } from 'vue';
import FAQ from '../components/FAQ.vue';

import { useStore } from 'vuex';
import { computed } from 'vue';

defineProps({
  msg: String
});


const store = useStore();

const services = computed(() => {
  return store.state.services;
});

store.dispatch('getData', 'services');

</script>

<template>
   <main id="main">
        <!-- ======= Breadcrumbs ======= -->
        <div class="breadcrumbs">
            <div class="page-header d-flex align-items-center" style="">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 text-center">
                            <h2>Services</h2>
                            <p>We offer on-demand digital solutions to enhance business growth and productivity</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div class="container">
                    <ol>
                        <li><router-link :to="{name: 'Index'}">Home</router-link></li>
                        <li>Services</li>
                    </ol>
                </div>
            </nav>
        </div>
        <!-- End Breadcrumbs -->


        <!-- ======= Services Section ======= -->
        <section id="service" class="services pt-0">
            <div class="container" data-aos="fade-up">

                <div class="section-header">
                    <span>Our Services</span>
                    <h2>Our Services</h2>

                </div>

                <div class="row gy-4">

                    <div v-for="service in services" :key="service" class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="card">
                            <div class="card-img">
                                <img :src="service.image" alt="" class="img-fluid">
                            </div>
                            <h3 class="stretched-link">{{service.title}}</h3>
                            <p>
                                {{ service.description}}
                            </p>
                            <div class="row d-flex mb-5 justify-content-center">
                                <router-link :to="{name: 'Quotation'}" class="readmore text-center stretched-link"><span>Order service</span><i class="bi bi-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <!-- End Services Section -->
        <FAQ />

    </main>
    <!-- End #main -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

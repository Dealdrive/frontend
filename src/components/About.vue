<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const about = computed(() => {
  return store.state.about;
});

store.dispatch('getData', 'about').then((data) => console.log(data, ' here '));


</script>

<template>
  <!-- ======= About Section ======= -->
      <section id="about">
        <div class="section-header">
          <span>About what we do</span>
          <h2>About what we do</h2> 
          <p class="lead">{{about.heading}}</p>
        </div>
        <div class="container" data-aos="fade-up">
          <div class="row">
            
  
            <div class="col-lg-6 content order-last py-5">

              <h3>
                {{ about.short_desc }}
              </h3>
  
              <ul>
                <li v-for="list in about.list" :key="list"><i class="bi bi-check-circle"></i>{{list}}</li>
              </ul>
  
            </div>
            <div class="col-lg-6 about-img order-first">
              <img :src="about.image" alt="About us image">
            </div>
          </div>
  
        </div>
      </section><!-- End About Section -->
</template>

<style scoped>

</style>

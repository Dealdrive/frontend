<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const teams = computed(() => {
  return store.state.teams;
});

// store.dispatch('getData', 'teams');


</script>

<template>
<!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="section-header">
          <span>Our Team</span>
          <h2>Meet Our Team</h2>
          <p>We have a creative team of designers, developers, strategists, and producers building innovative applications for brands like yours.</p>
          <p>Meet The Team You Want On Your Project</p>
        </div>

        <!-- Page Content -->
<div class="container">
  <div class="row">
   
    <!-- Team Member  -->
    <div class="col-xl-3 col-md-6 mb-4" v-for="team in teams" :key="team">
      <div class="card border-0 shadow">
        <div style="height: 250px;">
          <img :src="team.image" class="card-img-top h-full" :alt="team.name" style="width: 100%;" />
        </div>
        
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{{team.name}}</h5>
          <div class="card-text text-black-50">{{team.title}}</div>
          <div class="social d-flex justify-content-around ">
            <a v-for="social in team.socials" :key="social" 
              :href="social.profile" target="_blank">
              <i :class="social.icon"></i>
            </a>
                  
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.row -->

</div>
<!-- /.container -->

      </div>
    </section><!-- End Team Section -->
 
</template>

<style scoped>

</style>

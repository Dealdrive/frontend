<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

defineProps({
  msg: String
});

const store = useStore();

const projects = computed(() => {
  return store.state.projects;
});

store.dispatch('getData', 'projects').then((data) => console.log(data));

const route = useRoute();


</script>

<template>
   <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="page-header d-flex align-items-center" style="">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>Projects</h2>
              <p>Check our completed jobs on Branding, web and software application.
              Every projects we build are chanel towards a particular 
              use case that might apply to your business needs. Explore our finished projects below</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'Index'}">Home</router-link></li>
            <li>Projects</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Departments Section ======= -->
    <section id="departments" class="departments">
      <div class="container">

        <div class="section-header">
          <h2>Project View</h2>
          <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
        </div>

        <div class="row gy-4">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item" v-for="project in projects" :key="project">
                <a :class="['nav-link', route.params.id == project.id ? 'active show' : '']" data-bs-toggle="tab" :href="'#tab-'+project.id">{{ project.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9">
            <div class="tab-content">
              <div :class="['tab-pane', route.params.id == project.id ? 'active show' : '']" :id="'tab-'+project.id" v-for="project in projects" :key="project">
                <div class="row gy-4">
                  <div class="col-lg-4 order-2 order-lg-1 w-100 text-center">
                    <img :src="project.image" alt="" class="img-fluid">
                  </div>
                  <div class="col-lg-12 order-1 order-lg-2 details">
                    <h3>{{project.name}}</h3>
                    <p class="fst-italic">{{project.desc}}</p>
                    <div>
                        <h5>Aim</h5>
                        <p>{{project.full_desc.aim}}</p>
                    </div>
                    <div>
                        <h5>The Gap</h5>
                        <p>{{project.full_desc.gap}}</p>
                    </div>
                    <div>
                        <h5>The Solution</h5>
                        <p>{{project.full_desc.solution}}</p>
                    </div>
                    <div>
                        <h5>Optimization</h5>
                        <p>{{project.full_desc.optimization}}</p>
                    </div>
                    <div>
                        <h5>The Results</h5>
                        <p>{{project.full_desc.result.title}}</p>
                        <ul>
                          <li v-for="data in project.full_desc.result.data" :key="data">{{ data }}</li>
                        </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Departments Section -->

    </main><!-- End #main -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.details > div{
  margin-bottom: 2rem;
}
</style>

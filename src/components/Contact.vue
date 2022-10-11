<template>
   <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Contact Us</h2>
          <p>Need Help? <span>Contact Us</span></p>
        </div>

        <div class="row gy-4">

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Our Address</h3>
                <p>{{contact.address}}</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item d-flex align-items-center">
              <i class="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                
                <p>{{contact.email2}}</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>{{contact.phone1}}</p>
                <p>{{contact.phone2}}</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <div><strong>Mon-Fri:</strong> 8AM - 5PM;
                  <strong>Sat:</strong> 9AM - 3PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div><!-- End Info Item -->

        </div>

       <form ref="contact_form" @submit.prevent="postData" class="send">
            <div class="row">
              <div class="col-md-6 form-group">
                <input v-model="form.user_name" type="text" name="user_name" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input v-model="form.user_email" type="email" class="form-control" name="user_email" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input v-model="form.phone" type="text" class="form-control" name="phone" id="phone" placeholder="Phone" required>
            </div>
            <div class="form-group mt-3">
              <input v-model="form.subject" type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea v-model="form.message" class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        <!--End Contact Form -->

      </div>
    </section><!-- End Contact Section -->

</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useRouter } from 'vue-router';

const store = useStore();

const contact = computed(() => {
  return store.state.contactus;
});

const contact_form = ref(null);

const form = {
    user_name:'',
    user_email: '',
    subject: '',
    message: '',
    phone: '',
    service_id: "service_0ltiw1g",
    template_id: "dealdrive_0fpecbe",
    user_id: "84Cf-v4RU4LGcbfYz"
};

const postData = () => {
  const data = {
    payload: {
      name: form.user_name,
      email: form.user_email,
      subject: form.subject,
      message: form.message,
      phone: form.phone
    },
    key: 'contacts'
  }

  store.dispatch('postData', data)
  .then((data) => {
    sendEmail();
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
}

const sendEmail = () => {
    emailjs.sendForm(form.service_id, form.template_id, contact_form.value, form.user_id)
        .then((result) => {
            contact_form.value.reset();
            alert("Your mail has been sent successfully. We will get back to you soon! Thanks.");
            
        }, (error) => {
            alert("Your mail was not sent successfully. Reach out to me dealdrivetechnology@gmail.com instead. Thanks.")
        });
} 






</script>

<style scoped>
  
</style>

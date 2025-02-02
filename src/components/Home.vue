<!-- eslint-disable vue/multi-word-component-names -->
<template id="home">
  <div>
    <!-- Floating Booking Icon -->
    <router-link to="/Booking" class="booking-icon btn btn-color text-color btn-sm">
      Book Visit
      <i class="bi bi-chevron-double-right"></i>
    </router-link>
  </div>

  <!--NAVBAR COMPONENT-->
  <NavBar />
  <!--HERO SECTION-->
  <div class="container-fluid p-0">
    <div class="text-center hero-section">
      <div class="overlay"></div>
      <div class="hero-content mt-5">
        <h1 class="text-white m-3">PROBLEMS WITH YOUR A/C & HEATER</h1>
        <div class="col-lg-6 mx-auto">
          <p class="m-0 text-white">Help is one click away</p>
          <div class="d-flex justify-content-center gap-2 mt-4">
            <router-link to="/Booking" class="btn btn-color text-color btn-sm">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
            <button type="button" class="btn btn-color btn-sm"><a href="tel:+6494461709" aria-label="Call Now Button"
                class="text-decoration-none text-color">Call Now</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--CAMOUFLAGE SECTION-->
 <Camouflage></Camouflage>
 
  <!--FINANCING OPTIONS SECTION-->
  <div class="container bg-color p-3">
    <div class="row">
      <div class="col-12 text-center mb-3 mt-3">
        <h2 class="">Financing Options</h2>
        <p class="mt-4 mb-3">
          Great Options for Financing
          <br>Your New Air Conditioning System!
        </p>
      </div>

    </div>

    <div class="row d-flex justify-content-center m-1">
      <div class="col-6 col-md-3">
        <div class="card-color">
          <div class="d-flex justify-content-center">
            <img src="../assets/synchronyCard.png" class="img-fluid mt-4 mb-3" style="width: 130px; height: 59px;" alt="Synchrony Card Image">
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn card-btn-color btn-sm mt-3 mb-3">
              <a href="https://www.mysynchrony.com/mmc/M9203263100" class="text-decoration-none text-white" aria-label="Apply here Syncrony Button"
                target="_blank">Apply Here</a>
            </button>
          </div>

        </div>
        <div class="p-0 mt-4 mb-4">
          <p class="financing-desc">
            A Carrier® credit card* from Wells Fargo Bank, N.A. is an easy and convenient way to pay for goods
            and services you purchase. And, as a Carrier® cardholder you can take advantage of other great benefits
            available throughout the year
          </p>
        </div>
      </div>

      <div class="col-6 col-md-3">
        <div class="card-color">
          <div class="d-flex justify-content-center">
            <img src="../assets/breezeCard.png" class="img-fluid mt-4 mb-3" target="_blank" style="width: 130px; height: 59px;" alt="BreezeCard Image">
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn card-btn-color btn-sm mt-3 mb-3">
              <a href="https://www.breezeleasehub.com/apply/TankAirConditioningLLC/tank-air-conditioning" aria-label="Apply here Breeze Button"
                class="text-decoration-none text-white">Apply Here</a>
            </button>
          </div>
        </div>

        <div class="p-0 mt-4 mb-4">
          <p class="financing-desc">
            A Carrier® credit card* from Wells Fargo Bank, N.A. is an easy and convenient way to pay for goods
            and services you purchase. And, as a Carrier® cardholder you can take advantage of other great benefits
            available throughout the year
          </p>
        </div>
      </div>

    </div>
  </div>

 <!--CAMOUFLAGE SECTION-->
 <Camouflage></Camouflage>
  <!--BANNER SECTION-->

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <img src="../assets/bannerImg.png" class=" banner-img img-fluid" alt="Banner Image Of Tank AC and Heat">
      </div>
    </div>
  </div>
  <!--SERVICES SECTION-->
  <div class="container mb-5">
    <div class="row bg-color d-flex justify-content-center">
      <div class="col-12 mt-5 mb-4 text-center">
        <h2>Services</h2>
      </div>
      <div class="col-10 mb-4 p-0">
        <p class="mb-5">
          As a proud veteran-owned business, we bring the same dedication, discipline,
          and commitment to excellence that we upheld in service to our country. We know
          the challenges our customers face when dealing with unexpected breakdowns,
          rising energy costs, or the frustration of uneven cooling in their homes.
          That’s why we’re here to provide solutions tailored to your specific needs.
        </p>
      </div>
      <!-- Card: AC Repair -->
      <div class="col-10 col-md-4 col-lg-3 mb-4 p-0 m-1">
        <div class="service-card position-relative rounded-3 text-white"
          style="background-image: url('/assets/serviceImg1.png'); background-size: cover; background-position: center;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></div>
          <div class="content position-relative p-4 d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-white mb-2">AC REPAIR</h3>
            <p class="text-center">
              Get your air conditioner back to optimal performance with our fast, reliable repair services.
            </p>
            <router-link to="/Booking" class="btn btn-color text-color btn">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card: AC Maintenance -->
      <div class="col-10 col-md-4 col-lg-3 mb-4 p-0 m-1">
        <div class="service-card position-relative rounded-3 text-white"
          style="background-image: url('/assets/serviceImg2.png'); background-size: cover; background-position: center;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></div>
          <div class="content position-relative p-4 d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-white mb-2">AC MAINTENANCE</h3>
            <p class="text-center">
              Keep your cooling system running efficiently year-round with our comprehensive maintenance plans.
            </p>
            <router-link to="/Booking" class="btn btn-color text-color btn">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card: AC Installation -->
      <div class="col-10 col-md-4 col-lg-3 mb-4 p-0 m-1">
        <div class="service-card position-relative rounded-3 text-white"
          style="background-image: url('/assets/serviceImg3.png'); background-size: cover; background-position: center;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></div>
          <div class="content position-relative p-4 d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-white mb-2">AC INSTALLATION</h3>
            <p class="text-center">
              Trust our experts for seamless and energy-efficient AC installations tailored to your needs.
            </p>
            <router-link to="/Booking" class="btn btn-color text-color btn">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card: Air Duct Cleaning-->
      <div class="col-10 col-md-4 col-lg-3 mb-4 p-0 m-1">
        <div class="service-card position-relative rounded-3 text-white"
          style="background-image: url('/assets/serviceImg5.png'); background-size: cover; background-position: center;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></div>
          <div class="content position-relative p-4 d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-white mb-2">AIR DUCT CLEANING</h3>
            <p class="text-center">
              Improve Indoor Air Quality. Professional Air Duct Cleaning.
            </p>
            <router-link to="/Booking" class="btn btn-color text-color btn">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card: Indoor Air Quality Testing-->
      <div class="col-10 col-md-4 col-lg-3 mb-4 p-0 m-1">
        <div class="service-card position-relative rounded-3 text-white"
          style="background-image: url('/assets/serviceImg6.png'); background-size: cover; background-position: center;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></div>
          <div class="content position-relative p-4 d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-white mb-2">INDOOR AIR QUALITY TESTING</h3>
            <p class="text-center">
              Identify & Eliminate Indoor Air Pollutants. Comprehensive IAQ Testing.
            </p>
            <router-link to="/Booking" class="btn btn-color text-color btn">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Card: UV Light -->
      <div class="col-10 col-md-4 col-lg-3 mb-4 p-0 m-1">
        <div class="service-card position-relative rounded-3 text-white"
          style="background-image: url('/assets/serviceImg4.png'); background-size: cover; background-position: center;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 rounded-3"></div>
          <div class="content position-relative p-4 d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-white mb-2">UV LIGHT INSTALL</h3>
            <p class="text-center">
              Prevent Mold & Bacteria Growth. UV Light Installation for Your HVAC System.
            </p>
            <router-link to="/Booking" class="btn btn-color text-color btn">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

 <!--CAMOUFLAGE SECTION-->
 <Camouflage></Camouflage>

  <!--ABOUT US SECTION-->
  <div class="container-fluid aboutUs-bg text-white">
    <div class="row d-flex justify-content-center">
      <div class="col-12 text-center mb-4">
        <h4>ABOUT US</h4>
      </div>
      <div class="col-10 col-md-5 p-0">
        <p>
          At TANK A/C & HEAT, we take pride in providing
          top-notch heating and cooling solutions with military precision
          and dedication. Founded by a veteran with a commitment
          to service and excellence, we deliver reliable, efficient,
          and trustworthy HVAC services. Whether it's a repair,
          maintenance, or installation, our team of experts
          ensures your comfort and satisfaction. Trust TANK A/C & HEAT
          to keep you cool in the summer and warm in the winter,
          with the same unwavering loyalty and diligence
          that we brought to our military service.
        </p>
      </div>
    </div>
  </div>

  <!--ELITE SECTION-->
  <div class="container p-3 pt-4 pb-4 mb-4">
    <div class="row d-flex justify-content-around">
      <div class="col-12 col-md-5 p-0">
        <div class="d-flex justify-content-center">
          <div class="col-10">
            <section class="p-0">
              <div class="image rounded-2">
                <img src="../assets/fleetImg.png" alt="Fleet truck of Tank AC and Heat" />
              </div>
              <div class="text">
                <img src="../assets/truckImg.png" class="img-fluid rounded-2" alt="Fleet of Tank AC and Heat">
              </div>
            </section>
          </div>
        </div>
      </div>
      <br>
      <div class="col-10 col-md-6 p-0">
        <div class="row d-flex justify-content-around mt-5">
          <div class="col-12 col-md-5 align-self-center">
            <h2 class="text-dark">ELITE SERVICE AT YOUR FINGER TIPS</h2>
            <p>
              Stay cool and comfortable with top-notch AC service right at your fingertips.
              We’re here to make sure your home feels just right, with easy, reliable, and
              friendly help whenever you need it. From quick fixes to regular tune-ups, we’ve
              got you covered—no hassle, just great service to keep you chill.
            </p>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center">
            <video class="rounded-2 w-100 align-self-start" autoplay muted loop controls playsinline>
              <source src="../assets/tankVideo.mp4" type="video/mp4">
              <track src="../assets/captions.vtt" kind="captions" srclang="en" label="English"> 
              <track src="../assets/audiodescription.vtt" kind="descriptions" srclang="en" label="Audio Description"> 
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--CAMOUFLAGE SECTION-->
  <Camouflage></Camouflage>

  <!--FOOTER SECTION-->
  <FooterComp></FooterComp>

</template>

<style scoped>
/* Styles for the floating booking button */
.booking-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 35px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease;
}

/* HERO SECTION CSS */
.hero-section {
  position: relative;
  background: url('../assets/heroImg.png') no-repeat left center/cover;
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content .btn {
  padding: 0.5rem 1.5rem;
}

.navbar {
  height: 70px;
}

.btn-color {
  background-color: #d9d9d9;
}

/* FINANCIAL SECTION CSS */
h1 {
  font-size: calc(0.9rem + 1.5vw) !important;
}

.financing-desc {
  font-size: 9px;
  font-family: Helvetica, sans-serif;
}

.card-color {
  background-color: #484847;
  border-radius: 5px;
  height: 175px;
}

.card-btn-color {
  background-color: #E95722;
}

/* SERVICES SECTION CSS */
.bg-color {
  background-color: #BFB59F;
}

.service-card {
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.service-card .content {
  z-index: 2;
  text-align: center;
}

.service-card .overlay {
  z-index: 1;
}

/* BANNER IMG SECTION CSS */
.banner-img {
  width: 100%;
  max-height: 17vh;
  /* Ensures the image looks good while maintaining its aspect ratio */
}

@media (min-width: 1440px) {
  .banner-img {
    max-height: 24vh;
  }
}

/* ABOUT US SECTION CSS */
.aboutUs-bg {
  padding: 80px 20px;
  background-color: #1A1919DB;
}

/* CAMOUFLAGE CSS */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  /* Semi-transparent overlay */
}

.content {
  position: relative;
  z-index: 1;
  /* Ensures content appears above the overlay */
  text-align: center;
  /* Centers the text horizontally */
  top: 50%;
  /* Vertically centers the text */
  transform: translateY(-50%);
  /* Adjusts for perfect vertical centering */
  padding: 20px;
}

/* ELITE SECTION CSS */
section {
  width: min(100%, 800px);
  margin: 5rem auto;

  height: 300px;
  display: grid;
  grid-template-columns: .15fr 1fr .15fr;
  grid-template-rows: 1.5fr 1fr;
  grid-template-areas: "image image image" ". text image-stop" ". text .";
}

@media (min-width: 600px) {
  section {
    grid-template-columns: 2fr .5fr 1fr;
    grid-template-rows: 100px auto;
    grid-template-areas: "image image ." ". text text" "image-stop image-stop .";
  }
}

section>.image {
  grid-area: image;
  grid-row: image / image-stop;
}

section>.image img {
  border-radius: 5px;
  width: 100%;
  height: 90%;
  object-fit: cover;
  display: block;
}

section>.text {
  grid-area: text;
  border-radius: 5px;
}

/* Movement effect */
@keyframes camouflage-move {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-20px, -20px);
  }
}

.text-color {
  color: #E95722;
}
</style>

<script>
import NavBar from './NavBar.vue';
import Camouflage from './Camouflage.vue'
import FooterComp from './FooterComp.vue'

export default {
  components: {
    NavBar,
    FooterComp,
    Camouflage
  },
  async created() {
    await this.$nextTick();
    const home = document.getElementById("home");
    home.scrollIntoView({ behavior: "smooth", block: "start" });
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

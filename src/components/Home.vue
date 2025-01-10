<!-- eslint-disable vue/multi-word-component-names -->
<template id="home">
  <!--NAVBAR COMPONENT-->
  <NavBar />
  <!--HERO SECTION-->
  <div class="container p-0">
    <div class="text-center hero-section">
      <div class="overlay"></div>
      <div class="hero-content mt-5">
        <h1 class="fw-bold text-white m-3">PROBLEMS WITH YOUR A/C & HEATER</h1>
        <div class="col-lg-6 mx-auto">
          <p class="m-0 text-white fw-bold">Help is one click away</p>
          <div class="d-flex justify-content-center gap-2 mt-3">
            <router-link to="/Booking" class="btn btn-color text-color btn-sm">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
            <button type="button" class="btn btn-color btn-sm"><a href="tel:+6494461709"
                class="text-decoration-none text-color">Call Now</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--FINANCING OPTIONS SECTION-->
  <div class="container bg-color p-3">
    <div class="row d-flex justify-content-center">
      <div class="col-12 text-center mb-3 mt-3">
        <h2 class="text-white">Financing Options</h2>
        <h6 class="mt-4 mb-3">
          Great Options for Financing Your New Air Conditioning System!
        </h6>
      </div>
      <div class="col-5 card-color d-flex flex-column p-3 m-1 rounded-2">
        <img src="../assets/synchronyCard.png" class="img-fluid mt-3">
        <button class="btn card-btn-color btn-sm mt-5 mb-3">
          <a href="https://www.mysynchrony.com/mmc/M9203263100" class="text-decoration-none text-white"
            target="_blank">Apply Here</a>
        </button>
      </div>
      <div class="col-5 card-color d-flex flex-column p-3 m-1 rounded-2">
        <img src="../assets/breezeCard.png" class="img-fluid mt-3">
        <button class="btn card-btn-color btn-sm mt-53 mb-3">
          <a href="https://www.breezeleasehub.com/apply/TankAirConditioningLLC/tank-air-conditioning"
            class="text-decoration-none text-white" target="_blank">Apply Here</a>
        </button>
      </div>
    </div>
  </div>

  <!--BANNER SECTION-->
  <div class="container">
    <div class="row">
      <div class="col-12 p-0">
        <img src="../assets/bannerImg.png" class="img-fluid w-100" style="height: 135px;">
      </div>
    </div>
  </div>

  <!--SERVICES SECTION-->
  <div class="container">
    <div class="row bg-color">
      <div class="col-12 mt-4 mb-4 text-center">
        <h2>Services</h2>
      </div>
      <div class="col-12 mb-4">
        <p>
          As a proud veteran-owned business, we bring the same dedication, discipline,
          and commitment to excellence that we upheld in service to our country. We know
          the challenges our customers face when dealing with unexpected breakdowns,
          rising energy costs, or the frustration of uneven cooling in their homes.
          That’s why we’re here to provide solutions tailored to your specific needs.
        </p>
      </div>
      <!-- Left Column for Image -->
      <div class="col-6 p-0">
        <!-- Video Player -->
        <video class="video-fluid w-100" autoplay muted loop controls playsinline>
          <source src="../assets/tankVideo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Right Column for Text -->
      <div class="col-6 d-flex flex-column justify-content-center">
        <h3 class="text-white">AC REPAIR</h3>
        <p>
          Get your air conditioner
          back to optimal
          performance with
          our fast, reliable repair
          services.
        </p>
      </div>

      <!-- Right Column for Text -->
      <div class="col-6 d-flex flex-column justify-content-center">
        <h3 class="text-white">AC MAINTENANCE</h3>
        <p>
          Keep your cooling
          system running
          efficiently year-round
          with our comprehensive
          maintenance plans.
        </p>
      </div>
      <!-- Left Column for Image -->
      <div class="col-6 p-0">
        <img src="../assets/serviceImg2.png" class="img-fluid w-100" alt="AC Repair">
      </div>

      <!-- Left Column for Image -->
      <div class="col-6 p-0">
        <img src="../assets/serviceImg3.png" class="img-fluid w-100" alt="AC Repair">
      </div>

      <!-- Right Column for Text -->
      <div class="col-6 d-flex flex-column justify-content-center">
        <h3 class="text-white">AC INSTALLATION</h3>
        <p>
          Trust our experts for seamless
          and energy-efficient AC
          installations tailored
          to your needs.
        </p>
      </div>
    </div>
  </div>

  <!--ABOUT US SECTION-->
  <div class="container p-3 pt-4 pb-4 aboutUs-bg text-white">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <h4>ABOUT US</h4>
      </div>
      <div class="col-12">
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
  <div class="container pb-0 bg-color">
    <div class="row">
      <!-- Left Column for Image -->
      <div class="col-12 p-0">
        <img src="../assets/truckImg.png" class="img-fluid w-100" alt="Fleet truck of Tank AC and Heat">
      </div>
      <!-- Right Column for Text -->
      <div class="col-12 mt-3 d-flex flex-column justify-content-center">
        <h3 class="text-dark">ELITE SERVICE AT YOUR FINGER TIPS</h3>
        <p>
          Stay cool and comfortable with top-notch AC service right at your fingertips. 
          We’re here to make sure your home feels just right, with easy, reliable, and 
          friendly help whenever you need it. From quick fixes to regular tune-ups, we’ve 
          got you covered—no hassle, just great service to keep you chill.
        </p>
      </div>
      <div class="col-12 p-0">
        <img src="../assets/fleetImg.png" class="img-fluid w-100" alt="Fleet truck of Tank AC and Heat">
      </div>
    </div>
  </div>

  <!--CAMOUFLAGE SECTION-->
  <Camouflage></Camouflage>

  <!--FOOTER SECTION-->
  <FooterComp></FooterComp>

</template>

<style scoped>
/* HERO SECTION CSS */
.hero-section {
  position: relative;
  background: url('../assets/heroImg.png') no-repeat left center/cover;
  min-height: 400px;
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

.btn-color {
  background-color: #d9d9d9;
}

/* FINANCIAL SECTION CSS */
/* TEMPORARY CLASS FOR BREEZE CARD */
.mt-53 {
  margin-top: 53px;
  ;
}

.card-color {
  background-color: #484847;
}

.card-btn-color {
  background-color: #E95722;
}

/* SERVICES SECTION CSS */
.bg-color {
  background-color: #BFB59F;
}

/* ABOUT US SECTION CSS */
.aboutUs-bg {
  background-color: #0F0F0F;
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

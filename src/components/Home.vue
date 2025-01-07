<!-- eslint-disable vue/multi-word-component-names -->
<template id="home">
  <!--NAVBAR COMPONENT-->
  <NavBar />
  <!--HERO SECTION-->
  <div class="container p-0">
    <div class="text-center hero-section">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="fw-bold text-white">PROBLEMS WITH YOUR A/C & HEATER</h1>
        <div class="col-lg-6 mx-auto">
          <p class="m-0 text-white fw-bold">Help is one click away</p>
          <div class="d-flex justify-content-center gap-2 mt-3">
            <router-link to="/Booking" class="btn btn-color text-color btn-sm">
              Book Visit
              <i class="bi bi-chevron-double-right"></i>
            </router-link>
            <button type="button" class="btn btn-color btn-sm"><a href="tel:+6494461709" class="text-decoration-none text-color">Call Now</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--FINANCING OPTIONS SECTION-->
  <div class="container bg-color p-3">
    <div class="row d-flex justify-content-center">
      <div class="col-12 text-center mb-3">
        <h1 class="text-white">Financing Options</h1>
      </div>
      <div class="col-5 card-color d-flex flex-column p-3 m-1 rounded-2">
        <img src="../assets/synchronyCard.png" class="img-fluid mt-3">
        <button class="btn card-btn-color btn-sm mt-5 mb-3">
          <a href="https://www.mysynchrony.com/mmc/M9203263100" class="text-decoration-none text-white" target="_blank">Apply Here</a>
        </button>
      </div>
      <div class="col-5 card-color d-flex flex-column p-3 m-1 rounded-2">
        <img src="../assets/breezeCard.png" class="img-fluid mt-3">
        <button class="btn card-btn-color btn-sm mt-53 mb-3">
          <a href="https://www.breezeleasehub.com/apply/TankAirConditioningLLC/tank-air-conditioning" class="text-decoration-none text-white" target="_blank">Apply Here</a>
        </button>
      </div>
    </div>
    <div class="row mt-5 mb-4">
      <div class="col-12 text-center">
        <h6>
          Great Options for Financing Your New Air Conditioning System!
        </h6>
        <p class="mt-4">
          A Carrier® credit card* from Wells Fargo Bank, N.A. is an easy and convenient way to pay for goods 
          and services you purchase. And, as a Carrier® cardholder you can take advantage of other great benefits 
          available throughout the year
        </p>
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

      <!-- Left Column for Image -->
      <div class="col-6 p-0">
        <!-- Video Player -->
        <video 
          class="video-fluid w-100" 
          autoplay 
          muted 
          loop 
          controls 
          playsinline>
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
  <div class="container p-5 aboutUs-bg text-white">
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

  <!--CAMOUFLAGE SECTION-->
  <div class="container p-0">
    <img src="../assets/rect.png" class="img-fluid w-100" style="height: 50px;">
  </div>

  <!--FOOTER SECTION-->
  <div class="container p-4 footer-bg">
    <div class="row container">
      <!--IMG LOGO-->
      <div class="col-12">
        <a class="navbar-brand fw-bold d-flex align-items-center m-0" href="#">
          <img src="../assets/logo.png" alt="Logo" class="me-2" style="width: 80px; height: 60px;" />
        </a>
      </div>
      <!--WHITE HORIZONTAL LINE-->
      <div class="col-12 text-center">
        <hr class="border border-white border-1 my-4" />
      </div>
      <!--SOCIAL MEDIA ICONS-->
      <div class="col-12 d-flex justify-content-center">
        <a href="#" class="nav-link m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-google"
            viewBox="0 0 16 16">
            <path
              d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
        </a>
        <a href="#" class="nav-link m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-facebook"
            viewBox="0 0 16 16">
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
        <a href="#" class="nav-link m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-instagram"
            viewBox="0 0 16 16">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
        <a href="#" class="nav-link m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-twitter-x"
            viewBox="0 0 16 16">
            <path
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </a>
      </div>
      <!--COPYRIGHT SECTION-->
      <div class="col-12 text-center mt-3 text-white">
        <p class="mb-0 copy-right-txt">
          &copy; {{ currentYear }} TANK A/C & HEAT<br />
          Designed by Engfuel.com LLC
        </p>
      </div>
    </div>
  </div>

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
  margin-top: 53px;;
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
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
}

.content {
  position: relative;
  z-index: 1; /* Ensures content appears above the overlay */
  text-align: center; /* Centers the text horizontally */
  top: 50%; /* Vertically centers the text */
  transform: translateY(-50%); /* Adjusts for perfect vertical centering */
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

/* FOOTER SECTION CSS */
.footer-bg {
  background-color: #0F0F0F;
  position: relative; /* Ensure child elements like .overlay are positioned relative to the footer */
  background-image: url(../assets/tankFooter.png);
  background-size: cover; /* Make the image cover the entire footer */
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  color: white; /* Default text color */
  padding: 20px 0; /* Add padding for spacing */
}
.footer-bg .overlay {
  position: absolute; /* Overlay spans the entire footer */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  z-index: 1; /* Ensure the overlay is above the background image */
}
.footer-bg .container {
  position: relative; /* Position text above the overlay */
  z-index: 2; /* Ensure text is above the overlay */
}
/* COPYRIGHT SECTION CSS */
.copy-right-txt {
  font-size: 0.7rem;
}
.text-color {
  color: #E95722;
}
</style>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar,
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


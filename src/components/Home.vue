<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- MOBILE VERSION -->
  <nav id="home" class="navbar bg-color p-0 shadow-lg" v-if="isMobile">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
        <img src="../assets/logo.png" alt="Logo" class="me-2" style="width: 60px; height: 60px;" />
        <div>
          TANK A/C & HEAT
          <br />
          <span class="fw-bold" style="font-size: 0.7rem;">VETERAN OWNED</span>
        </div>
      </a>
      <button class="navbar-toggler p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <div class="toggler-icon">
            <svg width="30" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 28V23.3333H42V28H0ZM0 16.3333V11.6667H42V16.3333H0ZM0 4.66667V0H42V4.66667H0Z"
                fill="#36454F" />
            </svg>
          </div>
        </span>
      </button>
      <div class="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header secondary-bg-color p-2">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">TANK A/C & HEAT</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body bg-color">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!--DESKTOP VERSION-->
  <nav id="home" class="navbar-custom bg-color shadow-lg" v-else>
    <div class="container-fluid">
      <div class="row text-dark">
        <div class="col-4 d-flex justify-content-center align-items-center">
          <a class="nav-link m-3" href="#">Home</a>
          <a class="nav-link m-3" href="#">Link</a>
          <a class="nav-link m-3" href="#">Link</a>
          <a class="nav-link m-3" href="#">Link</a>
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
          <a class="display-6 text-dark" href="#">
            <!-- TANK A/C & HEAT -->
          </a>
        </div>
      </div>
    </div>
  </nav>

<!-- HERO SECTION -->
<div class="text-center hero-section">
  <div class="overlay"></div>
  <div class="hero-content">
    <h1 class="fw-bold text-white">PROBLEMS WITH YOUR A/C & HEATER</h1>
    <div class="col-lg-6 mx-auto">
      <p class="m-0 text-white fw-bold">Help is one click away</p>
      <div class="d-flex justify-content-center gap-2 mt-3">
        <button type="button" class="btn btn-primary btn-sm">Book Visit</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Call Now</button>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped>
/* HERO SECTION CSS */
.hero-section {
  position: relative;
  background: url('../assets/heroImg.png') no-repeat center center/cover;
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
  background-color: #101010;
}

.btn-grad {
  background-image: linear-gradient(to right, #AAFFA9 0%, #11FFBD 51%, #AAFFA9 100%);
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.btn-border-color {
  border: 1px solid #CFDD51;
}

.text-color {
  color: #cfdd51;
}

.toggler-icon {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #cfdd51;
}

.bg-color {
  background-color: #BFB59F;
}

.secondary-bg-color {
  background-color: #f3f3f3;
}

.navbar-toggler {
  border: none !important;
  box-shadow: none !important;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}
</style>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const isMobile = ref(false);

    onMounted(() => {
      isMobile.value = window.innerWidth <= 480;

      window.addEventListener('resize', updateIsMobile);
      window.addEventListener('scroll', makeNavBarSticky);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateIsMobile);
      window.removeEventListener('scroll', makeNavBarSticky);
    });

    const updateIsMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const makeNavBarSticky = () => {
      const navbar = document.getElementById("home");
      const sticky = 64;

      if (navbar) {
        if (window.scrollY >= sticky) {
          navbar.classList.add("position-sticky", "sticky");
        } else {
          navbar.classList.remove("position-sticky", "sticky");
        }
      } else {
        console.error('Navbar element not found.');
      }
    };

    return {
      isMobile,
      makeNavBarSticky,
      updateIsMobile,
    };
  }
}
</script>

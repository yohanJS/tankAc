<template>
  <!-- MOBILE VERSION -->
  <nav id="home" class="navbar bg-color p-0 shadow-lg" v-if="isMobile">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand fw-bold d-flex align-items-center m-0">
        <img src="../assets/logo.png" alt="Logo" class="me-2" style="width: 60px; height: 40px;" />
      </router-link>
      <div class="col">
        <h3 class="m-0">TANK A/C & HEAT</h3>
        <p class="m-0" style="font-size: 0.7rem;">VETERAN OWNED</p>
      </div>
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
            <router-link to="/" class="nav-link active" aria-current="page">
              HOME
            </router-link>
            <a href="#" @click.prevent="showMaintenanceModal" class="nav-link">
                BOOK
            </a>
            <router-link v-if="isLoggedIn" to="/UpcomingBookings" class="nav-link">
              UPCOMING BOOKINGS
            </router-link>
            <router-link v-if="!isLoggedIn" to="/Login" class="nav-link text-primary">
              LOGIN
            </router-link>
            <router-link v-else to="/Login" class="nav-link text-danger" @click="logout">
              LOGOUT
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- DESKTOP VERSION -->
  <nav id="home" class="navbar-custom bg-color shadow-lg d-flex align-items-center" v-else>
    <div class="container-fluid">
      <div class="row text-dark align-items-center">

        <div class="col">
          <div class="row">
            <!-- Logo -->
            <div class="col-3 d-flex justify-content-center">
              <router-link to="/" class="navbar-brand fw-bold d-flex align-items-center m-0">
                <img src="../assets/logo.png" alt="Logo" class="me-2" style="width: 80px; height: 60px;" />
              </router-link>
            </div>

            <div class="col">
              <h3 class="m-0">TANK A/C & HEAT</h3>
              <p class=" m-0" style="font-size: 0.7rem;">VETERAN OWNED</p>
            </div>
          </div>
        </div>
        <!-- Links -->
        <div class="desktop-navbar col-6">
          <ul class="navbar-nav d-flex flex-row justify-content-center">
            <router-link to="/" class="nav-link m-3 pt-2 active" aria-current="page">
              HOME
            </router-link>
            <a href="#" @click.prevent="showMaintenanceModal" class="nav-link m-3 pt-2">
              BOOK
            </a>
            <router-link v-if="isLoggedIn" to="/UpcomingBookings" class="nav-link m-3 pt-2">
              UPCOMING BOOKINGS
            </router-link>
            <!-- <li class="nav-item"><a class="nav-link m-3 pt-4" href="#">FINANCIAL</a></li>
            <li class="nav-item"><a class="nav-link m-3 pt-4" href="#">CONTACT US</a></li> -->
            <router-link v-if="!isLoggedIn" to="/Login" class="nav-link m-3 pt-2 text-primary">
              LOGIN
            </router-link>
            <router-link v-else to="/Login" class="nav-link m-3 pt-2 text-danger" @click="logout">
              LOGOUT
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- Maintenance Modal -->
  <div class="modal fade" id="maintenanceModal" tabindex="-1" aria-labelledby="maintenanceModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content modern-modal rounded-2 border-0 shadow-lg">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="maintenanceModalLabel">System Maintenance</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center p-4">
          <i class="bi bi-wrench-adjustable fs-1 mb-3"></i>
          <p>Our booking system is currently undergoing maintenance. We apologize for any inconvenience.</p>
          <p>Please contact us directly at:</p>
          <a href="tel:+6494461709" class="btn btn-color text-color mt-2">
            <i class="bi bi-telephone-fill me-2"></i>Call Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as bootstrap from 'bootstrap';

export default {
  data() {
    return {
      isLoggedIn: sessionStorage.getItem("isLoggedIn") === "true",
    };
  },
  methods: {
    async logout() {
      window.location.href = "/Login";
      // Set a flag in localStorage to indicate successful login
      sessionStorage.setItem("isLoggedIn", "false");
      this.isLoggedIn = false;
    },
    showMaintenanceModal() {
      const modalElement = document.getElementById('maintenanceModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    },
  },
  setup() {
    const isMobile = ref(false);

    onMounted(() => {
      isMobile.value = window.innerWidth <= 768;

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
};
</script>

<style scoped>
.toggler-icon {
  width: 30px;
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

.navbar-custom {
  height: 70px;
}

.navbar-toggler {
  border: none !important;
  box-shadow: none !important;
}

.desktop-navbar ul li:hover {
  background-color: #919191c9;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}

/* Modal styles */
.modern-modal {
  background-color: #d9d9d9;
  color: #000;
}

.modal-title {
  font-size: 1.5rem;
  color: #000;
}

.btn-color {
  background-color: #d9d9d9;
}

.text-color {
  color: #E95722;
}
</style>

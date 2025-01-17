<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <NavBar></NavBar>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card col-12 col-md-6 p-3 pt-5 pb-5">
        <form @submit.prevent="login">
          <div class="mb-3">
            <input required type="email"
                   v-model="email"
                   placeholder="Email"
                   class="form-control rounded-3 py-2"
                   style="font-size: 1.5rem;" />
          </div>
          <div class="mb-3">
            <input required type="password"
                   v-model="password"
                   placeholder="Password"
                   class="form-control rounded-3 py-2"
                   style="font-size: 1.5rem;" />
          </div>
          <button type="submit"
                  class="btn w-100 btn-book-now mt-2 fs-2">
            <i class="bi bi-person m-0 fs-2"></i>
            Login
          </button>
        </form>
        <p v-if="message != ''" class="text-center mt-3 mb-0" style="font-size: 0.8rem; color: #3f72af;">{{ message }}</p>
      </div>
    </div>
    <FooterComp></FooterComp>
  </template>
  
  <script>
    import axiosClient from "../util/axiosClient";
    import NavBar from './NavBar.vue';
    import FooterComp from './FooterComp.vue'
  
    export default {
        components: {
    NavBar,
    FooterComp,
  },
      data() {
        return {
          isLoggedIn: sessionStorage.getItem("isLoggedIn") === "true",
          email: "",
          password: "",
          message: "",
          isPrd: false,
          LoginUrl: "",
        };
      },
      methods: {
        async created() {
          this.LoginUrl = this.isPrd ? "https://engfuel.com/Account/login" : "https://localhost:7144/Account/login";
        },
        async login() {
          try {
              const response = await axiosClient.post("https://localhost:7144/Account/login", {
              //const response = await axiosClient.post("https://engfuel.com/Account/login", {
              email: this.email,
              password: this.password,
              });
            this.message = response.data.message;
  
            // Set a flag in sessionStorage to indicate successful login
            sessionStorage.setItem("isLoggedIn", "true");
  
            // Redirect to the home page or any desired page
            window.location.href = "/UpcomingBookings";
          } catch (error) {
            this.message = error.response.data.message;
          }
        },
      },
    };
  </script>
  
  <style scoped>
    p, .btn-book-now {
      position: relative;
      z-index: 2;
    }
  
    p {
      font-size: 2.2rem;
      color: #fff;
      background: rgba(255, 255, 255, 0.1); /* Glass effect */
      backdrop-filter: blur(10px); /* Add blur to the background */
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
    }
  
    .btn-book-now {
      background-color: #E9A992; /* Semi-transparent background */
      color: #000;
      padding: 10px 20px;
      border-radius: 25px;
      transition: background-color 0.3s ease;
      backdrop-filter: blur(10px);
      border: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    }
  
      .btn-book-now:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
      }
  
    body {
      background-color: #f2f2f2;
      font-family: Arial, sans-serif;
      font-size: 0.8rem;
    }
  
    .card {
      font-size: 0.8rem;
      background-color: #d9d9d9;
      padding: 10px;
      box-shadow: 2px 2px 5px rgba(200, 200, 200, 0.3);
    }
  
    .steel-color {
      color: #3f72af;
    }
  </style>
  
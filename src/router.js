import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Booking from "./components/Booking.vue";
import Login from "./components/Login.vue";
import UpcomingBookings from "./components/UpcomingBookings.vue";

const isLoggedIn = () => {
  // Check if the user is logged in
  return sessionStorage.getItem("isLoggedIn") === "true";
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Booking",
    name: "Booking",
    component: Booking,
  },
  { path: "/Login", name: "Login", component: Login },
  {
    path: "/UpcomingBookings",
    component: UpcomingBookings,
    name: "UpcomingBookings",
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next(); // Allow access
      } else {
        next("/login"); // Redirect to login page
      }
    },
  },
];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes,
});

export default router;

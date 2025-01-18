<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-fluid p-0 position-relative">
      <img src="../assets/rect.png" class="img-fluid w-100" style="height: 50px;">
      <div class="overlay"></div>
    </div>
  </template>

  <script>
  </script>

  <style scoped>
  .container {
    position: relative;
  }
  .container .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1;
  }
  </style>

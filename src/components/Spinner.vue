<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 3rem;
  height: 3rem;
  margin: 2rem auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #46321a;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to { -webkit-transform: rotateZ(360deg);  }
}
</style>
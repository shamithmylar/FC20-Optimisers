<template>
<div class="container container-home flex-column  flex-md-row">
  <div class="card card-home" style="width: 18rem;">
  <img src="../assets/images/trash.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Report trash</h5>
    <p class="card-text">Get in touch with your nearest NGO to keep your surroundings clean.</p>
    <a href="#" class="btn btn-outline-success">REPORT</a>
  </div>
  </div>

  <div class="card card-home" style="width: 18rem;">
  <img src="../assets/images/recycle.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Recycle</h5>
    <p class="card-text">There is no such thing as ‘away’. When we throw anything away it must go somewhere.</p>
    <a href="#" class="btn btn-outline-success">RECYCLE</a>
  </div>
  </div>

  <div class="card card-home" style="width: 18rem;">
  <img src="../assets/images/volunteer.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Volunteer</h5>
    <p class="card-text">The greatest threat to our planet is the belief that someone else will save it.</p>
    <a href="#" class="btn btn-outline-success">VOLUNTEER</a>
  </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
}
</script>

<style>
  .container-home{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }

  .card-home{
    margin: 5rem 2rem;
  }

  .btn-outline-success{
    width: 95%;
    color: #3BAC01;
    border: 1px solid #3BAC01;
  }

  .btn-outline-success:hover{
    color: #fff;
    background: #3BAC01;
  }
</style>

<template>

<div class="container container-fund flex-column flex-md-row container-fund">
  <div class="card card-fund" style="width: 18rem;">
  <img src="../assets/images/localfund.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Local funds</h5>
    <a href="#" class="btn btn-outline-success">DONATE NOW</a>
  </div>
  </div>

  <div class="card card-fund" style="width: 18rem;">
  <img src="../assets/images/crowdfund.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Crowd funding</h5>
    <a href="#" class="btn btn-outline-success">SET GOAL</a>
  </div>
  </div>

  <div class="card card-fund" style="width: 18rem;">
  <img src="../assets/images/ngofund.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Fund NGO's</h5>
    <a href="#" class="btn btn-outline-success">CHOOSE NGO</a>
  </div>
  </div>
</div>

</template>


<script>
export default {

}
</script>

<style>


  .btn-outline-success{
    width: 95%;
    color: #3BAC01;
    border: 1px solid #3BAC01;
  }

  .btn-outline-success:hover{
    color: #fff;
    background: #3BAC01;
  }

  .container-fund{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }

  .card-fund{
    margin: 5rem 2rem;
  }


</style>
<template>
<div class="funding-section">
  <h2>Funding</h2>
  <p>We don’t want to protect environment, We want to create a world where the environment does not need protecting.</p>
</div>

<div class="container container-fund flex-column flex-md-row flex-wrap container-fund">
  <div class="card card-fund" style="width: 18rem;">
  <img src="../assets/images/localfund.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Local funds</h5>
    <p class="card-text">Donate using "Local Funds" option to provide basic facilities to the volunteers.</p>
    <a href="#" class="btn btn-outline-success">DONATE NOW</a>
  </div>
  </div>

  <div class="card card-fund" style="width: 18rem;">
  <img src="../assets/images/crowdfund.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Crowd funding</h5>
    <p class="card-text">Start "Crowd Funding" for undertaking large areas that need to be cleaned immediately. You can also use this option to start campaigns.</p>
    <a href="#" class="btn btn-outline-success">SET GOAL</a>
  </div>
  </div>

  <div class="card card-fund" style="width: 18rem;">
  <img src="../assets/images/ngofund.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Fund NGO's</h5>
    <p class="card-text">If you feel you can help, don’t back away, make a contribution. Donate to your favourite NGO's</p> 
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

  .funding-section{
    margin-top: 4rem;
  }

  .funding-section p{
    font-size: 1.1rem;
    width: 80%;
    margin: 0 auto;
  }

  .card-fund{
    border: 1px solid;
    border-radius: 10px;
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

  .container-fund{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }

  .card-fund{
    margin: 3rem 2rem;
  }
  
  @media (max-width: 1000px) {
    .card-fund{
      width: 80vw;
    }
    
  }

</style>
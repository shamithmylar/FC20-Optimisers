<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src="../assets/images/logo.png" alt="" class="nav-img">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
       <router-link :to="{name : 'home' }" class="nav-link"> Home </router-link> <span class="sr-only">(current)</span>
      </li>
      <li class="nav-item active">
        <router-link :to="{name :'navigation'}" class="nav-link"  >Navigation </router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name: 'chat'}" class="nav-link">Chat </router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name: 'blogs'}" class="nav-link" >Blogs </router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name:'funding'}" class="nav-link"> Funding </router-link>
      </li>
     
    </ul>
  </div>
</nav>
</template>

<style>
.navbar{
    background: #46321a !important;
}

.navbar-light .navbar-nav .active>.nav-link{
        color: #fff !important;
        margin-right: 2rem;
        font-size: 1.2rem;
        font-weight: 500 !important;
}

.nav-img{
    height: 3.8rem;
    width: 3.8rem;
    margin-right: 3rem;
    background: #fff;
    border-radius: 50%;
    border: none;
}



.navbar-light .navbar-nav .active>.nav-link:hover{
    color: #E9EFC0 !important;
}
</style>
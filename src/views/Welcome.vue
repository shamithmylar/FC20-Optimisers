
<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterHome" />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @login="enterHome"/>
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template> 

<script>
import SignupForm from '../components/Signup.vue'
import LoginForm from '../components/Login.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterHome = () => {
        router.push({name: 'home'})

    }

    return { showLogin, enterHome }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

  .welcome button{
    margin: 20px auto;
    color: #3BAC01;
    background: #fff;
    width: 10rem;
    height: 2.4rem;
    border-radius: 10px;
    border: 1px solid #3BAC01;
}

.welcome button:hover{
    color: #fff;
    background: #3BAC01;
}

.welcome span:hover{
    color: #3c21e1 ;
}

.welcome p{
    font-size: 1rem;
}
</style>
<template>
  <nav v-if="user">
    <div class="chat-container">
        <div class="avatar">
            <img src="../assets/images/avatar.jpeg" alt="">
        </div>
    <div class="chatnav-div">
        <p class="user-name">Hey there {{ user.displayName }}</p>
        <p class="login-status">Logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick" class="logout-btn">Logout</button>
    </div>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js'
import getUser from '../composables/getUser.js'

export default {
    setup(){
        const { logout, error } = useLogout()
        const { user } = getUser()

        const handleClick = async() => {
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }

        return { handleClick, user }
    }
}
</script>

<style>

.chat-container{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.chatnav-div{
    line-height: 0.7rem;
    margin: 1.5rem 0;
}

.user-name{
    font-size: 1.2rem;
    font-weight: 500;
}

.login-status{
    font-size: 1rem;
    font-weight: 300;
}

.logout-btn{
    color: #46321A;
    border: 1px solid #46321A;
    background: #fff;
    border-radius: 6px;
    width: 6rem;
    padding: 0.3rem;
    height: 3rem;
    align-items: center;
    margin: 1rem 1rem;

}

.logout-btn:hover{
    color: #fff;
    border: 1px solid #46321A;
    background: #46321A;
} 

 .chat-container{
  width: 80vw;
  margin: 0 auto;
  border-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-width: 90%;
  padding: 1rem;
  margin-top: 1rem;
} 

.avatar img{
    width: 6rem;
    height: auto;
    border-radius: 50%;
    border: 1px solid #000;
}

@media (max-width:660px){
   .chatnav-div{
    line-height: 1.2rem;
    margin: 0.5rem 0;
}
}

</style>
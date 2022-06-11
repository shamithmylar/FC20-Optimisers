<template>

  <div class="chat-section flex-column">
    <Chatnav/>
    <Chatwindow/>
    <NewchatForm />
  </div>

</template>

<script>
import Chatwindow from '../components/Chatwindow.vue'
import NewchatForm from '../components/NewchatForm.vue'
import getUser from '@/composables/getUser'
import Chatnav from '../components/Chatnav.vue'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { Chatnav, NewchatForm, Chatwindow },
  setup(){
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value){
        router.push({ name: 'welcome' })
      }
    })
  }

}
</script>

<style>

.chat-section{
  display: flex;
  width: 80vw;
  margin: 0 auto;
  margin-block: 2rem;
  margin-top: 4rem;
  border: 1.5px solid #46321A;
  border-radius: 10px;

}

</style>
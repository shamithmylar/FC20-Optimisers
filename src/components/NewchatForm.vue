<template>
  <form>
    <textarea 
    placeholder="type a message, and hit enter to send..."
    v-model="message"
    @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">
        {{ error }}
    </div>
  </form>
</template>

<script>
import { ref, useCssModule } from 'vue'
import getUser from '../composables/getUser.js'
import useCollection from '../composables/useCollection.js'
import { timeStamp } from '../firebase/config'

export default {
    setup(){
        const { user } = getUser()
        const { addDoc, error } = useCollection('messages')
        const message = ref('')

        const handleSubmit = async() => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timeStamp()
            }

            await addDoc(chat)
            if(!error.orvalue){
                message.value = ''
            }
        }

        return{
            message, 
            handleSubmit,
            error 
        }
    }
}
</script>

<style scoped>

form{
    margin: 1rem;
}

textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.5rem ;
    padding: 0.8rem;
    box-sizing: border-box;
    border: 1px solid #333;
    border-radius: 10px;
    width: 85%;
    
}

</style>
<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag):</label>
      <input 
        @keydown.enter.prevent="handleKeydown" 
        v-model="tag" 
        type="text"
      >
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timeStamp } from '../firebase/config'
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tags = ref([])
    const tag = ref('')
    const router = useRouter()
    //console.log(router)
    //router.go(1)
    //router.go(-1)
    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g,'') // remove all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timeStamp()
      }
      const res = await projectFirestore.collection('posts').add(post)
      // console.log(res) // can see the id and path of doc created
      router.push({ name: 'bolgs' })
    }
    return { body, title, tags, tag, handleKeydown, handleSubmit }
  },
}
</script>

<style scoped>

  body{
    background: #999;
  }
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #333;
  }

  textarea {
    height: 160px;
    background: #fff;
  }

  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: #000;
    margin-bottom: 10px;
  }

  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
  }
  
  button {
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 80%;
    color: #fff;
    background: #3BAC01;
    padding: 0.7rem;
    font-size: 1rem;
    border: none;
  }

  button:hover{
    color: #3BAC01;
    border: 1px solid #3BAC01;
    background: #fff;
    border: 1px solid #3BAC01;
  }

  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
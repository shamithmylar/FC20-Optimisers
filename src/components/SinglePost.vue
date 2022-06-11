<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })
    return { snippet }
  }
}
</script>

<style>
  .post {
    margin: 0 2rem 2rem;
    padding-bottom: 30px;
    border-bottom: 1px dashed #555;
  }

  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 1.7rem;
    color: #222;
    margin-bottom: 1rem;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
  }
</style>

<template>
  <div>
    <h1>Latest Posts</h1>
    <div class="create-post">
      <label for="create-post">Say Something...</label>
      <input type="text"
      id="create-post"
      v-model="message" placeholder="Create a Post">
      <button v-on:click="createPost">Post!</button>
    </div>
    <hr />
    <p v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        <p class="message">{{ post.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService'

export default {
  name: 'PostComponent',
  data () {
    return {
      posts: [],
      error: '',
      message: ''
    }
  },
  async created () {
    try {
      this.posts = await PostService.getPosts()
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async createPost () {
      await PostService.createPost(this.message)
      this.posts = await PostService.getPosts()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts-container {
  max-width: 800px;
  margin: 0 auto;
}

.post {
  position: relative;
  border: 1px solid lightblue;
  background-color: antiquewhite;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

.message {
  font-size: 16px;
  font-weight: 600;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-bottom: 0;
}
</style>

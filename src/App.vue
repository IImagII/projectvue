<template>
   <div>
      <div class="all">
         <PostForm @create="createPost" />
         <PostList :posts="posts" />
      </div>
   </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
   components: {
      PostForm,
      PostList,
   },
   data() {
      return {
         posts: [
            { id: 1, title: 'JavaScript', body: 'Описание поста' },
            { id: 2, title: 'Java', body: 'Описание поста 2' },
         ],
      }
   },
   methods: {
      createPost(post) {
         this.posts.push(post)
      },
   },
}
</script>

<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

.all {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
</style>

//single file component

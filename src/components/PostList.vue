<template>
   <div v-show="posts.length > 0">
      <h3>Список пользователей</h3>
      <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"></PostItem>
   </div>
   <h2 v-show="posts.length === 0" style="color: red">Нет сообщений</h2>
</template>
<script>
import PostItem from '@/components/PostItem.vue'
export default {
   components: {
      PostItem,
   },
   props: {
      posts: {
         type: Array,
         required: true,
      },
   },
}
</script>
<style></style>

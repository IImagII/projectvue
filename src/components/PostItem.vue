<template>
   <div class="post">
      <div>
         <div>{{ post.id }}</div>
         <div><strong>Название: </strong>{{ post.title }}</div>
         <div><strong>Описание </strong>{{ post.body }}</div>
      </div>
      <div class="post__btns">
         <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
         <my-button @click="$emit('remove', post)">удалить</my-button>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      post: {
         type: Object,
         required: true,
      },
   },
}
</script>
<style scoped>
.post {
   padding: 15px;
   border: 2px solid green;
   margin: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.post__btns {
   display: flex;
}
</style>

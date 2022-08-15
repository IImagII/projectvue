<template>
   <form class="form" @submit.prevent>
      <h4>Создание поста</h4>
      <MyInput v-focus v-model="post.title" type="text" placeholder="Название" />
      <MyInput v-model="post.body" type="text" placeholder="Описание" />
      <my-button @click="createPost">Создание поста</my-button>
   </form>
</template>
<script>
export default {
   data() {
      return {
         post: {
            title: '',
            body: '',
         },
      }
   },
   methods: {
      createPost() {
         this.post.id = Date.now()
         this.$emit('create', this.post)
         this.post = {
            title: '',
            body: '',
         }
      },
   },
}
</script>
<style>
.form {
   display: flex;
   align-items: center;
   flex-direction: column;
   margin: 10px;
}
h4 {
   margin-bottom: 15px;
   font-size: 20px;
}
</style>

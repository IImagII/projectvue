<template>
   <div>
      <div class="all">
         <h1>Страница с постами</h1>
         <div class="app_btns">
            <MyButton @click="showDialog">Создать пост</MyButton>
            <my-select v-model="selectedSort" :options="sortOptions"></my-select>
         </div>

         <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost" />
         </MyDialog>

         <PostList :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
         <div v-else style="color: red">Идет загрузка...</div>
      </div>
   </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MySelect from '@/components/UI/MySelect.vue'
import axios from 'axios'

export default {
   components: {
      PostForm,
      PostList,
      MyDialog,
      MyButton,
      MySelect,
   },
   data() {
      return {
         posts: [],
         dialogVisible: false,
         isPostsLoading: false,
         selectedSort: '',
         sortOptions: [
            {
               value: 'title',
               name: 'По названию',
            },
            {
               value: 'body',
               name: 'По содержимому',
            },
            {
               value: 'id',
               name: 'По идентификатору',
            },
         ],
      }
   },
   methods: {
      createPost(post) {
         this.posts.push(post)
         this.dialogVisible = false
      },
      removePost(post) {
         this.posts = this.posts.filter((p) => p.id !== post.id)
      },
      showDialog() {
         this.dialogVisible = true
      },
      async fetchPosts() {
         try {
            this.isPostsLoading = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.posts = response.data
         } catch (err) {
            alert('Ошибка')
         } finally {
            this.isPostsLoading = false
         }
      },
   },
   mounted() {
      this.fetchPosts()
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
.app_btns {
   display: flex;
   justify-content: space-between;
}
</style>

//single file component

<template>
   <div>
      <div>{{ likes }}</div>

      <h1>Страница с постами</h1>

      <!-- <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
      <div class="app_btns">
         <MyButton @click="showDialog">Создать пост</MyButton>
         <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
      <MyDialog v-model:show="dialogVisible">
         <PostForm @create="createPost" />
      </MyDialog>
      <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
      <div v-else style="color: red">Идет загрузка...</div>
      <div v-intersection="loadMorePost" class="observer"></div>  -->
   </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MySelect from '@/components/UI/MySelect.vue'
import axios from 'axios'
import { ref } from 'vue'
import { usePosts } from '@/hooks/usePosts'

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
         dialogVisible: false,
         sortOptions: [
            {
               value: 'title',
               name: 'По названию',
            },
            {
               value: 'body',
               name: 'По содержимому',
            },
         ],
      }
   },

   setup(props) {
      const { posts, isPostsLoading, totalPages } = usePosts(10)
   },
}
</script>

<style>
.app_btns {
   display: flex;
   justify-content: space-between;
}
.page__wrapper {
   display: flex;
   margin-top: 15px;
}
.page {
   border: 1px solid black;
   padding: 10px;
}
.current-page {
   border: 2px solid green;
}
</style>

<template>
   <div>
      <h1>Страница с постами</h1>
      <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск..."></my-input>
      <div class="app_btns">
         <MyButton @click="showDialog">Создать пост</MyButton>
         <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
      </div>
      <MyDialog v-model:show="dialogVisible">
         <PostForm @create="createPost" />
      </MyDialog>

      <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
      <div v-else style="color: red">Идет загрузка...</div>
      <div v-intersection="loadMorePost" class="observer"></div>

      <div class="page__wrapper">
         <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
               'current-page': page === pageNumber,
            }"
            @click="changePage(pageNumber)"
         >
            {{ pageNumber }}
         </div>
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
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

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
      }
   },
   methods: {
      ...mapMutations({
         setPage: 'post/setPage',
         setSearchQuery: 'post/setSearchQuery',
         setSelectedSort: 'post/setSelectedSort',
      }),
      ...mapActions({
         fetchPosts: 'post/fetchPosts',
         loadMorePost: 'post/loadMorePost',
      }),
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
   },

   mounted() {
      this.fetchPosts()
   },
   watch: {},
   computed: {
      ...mapState({
         posts: (state) => state.post.posts,
         isPostsLoading: (state) => state.post.isPostsLoading,
         selectedSort: (state) => state.post.selectedSort,
         searchQuery: (state) => state.post.searchQuery,
         page: (state) => state.post.page,
         limit: (state) => state.post.limit,
         totalPages: (state) => state.post.totalPages,
         sortOptions: (state) => state.post.sortOptions,
      }),
      ...mapGetters({
         sortedPosts: 'post/sortedPosts',
         sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
      }),
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

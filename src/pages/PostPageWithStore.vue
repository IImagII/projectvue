<template>
   <div>
      <h1>{{ $store.state.post.limit }}</h1>

      <!-- <h2>{{ $store.state.likes }}</h2>
      <div>
         <my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
         <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
      </div>
      <h1>Страница с постами</h1>
      <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
      <div class="app_btns">
         <MyButton @click="showDialog">Создать пост</MyButton>
         <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
      <MyDialog v-model:show="dialogVisible">
         <PostForm @create="createPost" />
      </MyDialog>

      <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
      <div v-else style="color: red">Идет загрузка...</div>
      <div v-intersection="loadMorePost" class="observer"></div> -->

      <!-- <div class="page__wrapper">
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
         </div> -->
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
         //     posts: [],
         //     dialogVisible: false,
         //     isPostsLoading: false,
         //     selectedSort: '',
         //     searchQuery: '',
         //     page: 1,
         //     limit: 10,
         //     totalPages: 0,
         //     sortOptions: [
         //        {
         //           value: 'title',
         //           name: 'По названию',
         //        },
         //        {
         //           value: 'body',
         //           name: 'По содержимому', // удаляем путем переноса в store postModule
         //        },
         //     ],
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
      // changePage(pageNumber) {
      //    this.page = pageNumber
      // },
      //  async fetchPosts() {
      //     try {
      //        this.isPostsLoading = true
      //        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      //           params: {
      //              _page: this.page,
      //              _limit: this.limit,
      //           },
      //        })
      //        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      //        this.posts = response.data
      //     } catch (err) {
      //        alert('Ошибка')
      //     } finally {
      //        this.isPostsLoading = false
      //     }
      //  },
      //  async loadMorePost() {
      //     try {
      //        this.page += 1
      //        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      //           params: {
      //              _page: this.page,
      //              _limit: this.limit,
      //           },
      //        })
      //        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      //        this.posts = [...this.posts, ...response.data]
      //     } catch (err) {
      //        alert('Ошибка')
      //     }
      //  },
   },

   mounted() {
      //  this.fetchPosts()
   },
   watch: {
      // page() {
      //    this.fetchPosts()
      // },
   },
   computed: {
      //   sortedPosts() {
      //      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      //   },
      //   sortedAndSearchedPosts() {
      //      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      //   }, // переносим в store в файл postModule
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

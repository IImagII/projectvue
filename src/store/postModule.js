export default postModule = {
   state: () => ({
      posts: [],
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
   }),
   getters: {
      sortedPosts(state) {
         return [state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
      },
      sortedAndSearchedPosts(state, getters) {
         return getters.sortedPosts.filter((post) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      },
   },
   mutations: {
      setPosts(state, posts) {
         state.posts = posts
      },
      setLoading(state, bool) {
         state.isPostsLoading = bool
      },
      setPage(state, page) {
         state.page = page
      },
      setSelectedSort(state, selectedSort) {
         state.selectedSort = selectedSort
      },
      setTotalPages(state, totalPages) {
         state.totalPages = totalPages
      },
      setSearchQuery(state, searchQuery) {
         state.searchQuery = searchQuery
      },
   },
   actions: {
      async fetchPosts({ state, commit }) {
         try {
            commit('setLoading', true) //this.isPostsLoading = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _page: state.page, // this.page
                  _limit: state.limit, //this.limit
               },
            })
            commit('setTotalPages'.Math.ceil(response.headers['x-total-count'] / state.limit)) // this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            commit('setPosts', response.data) //this.posts = response.data
         } catch (err) {
            alert('Ошибка')
         } finally {
            commit('setLoading', false) // this.isPostsLoading = false
         }
      },
      async loadMorePost() {
         try {
            commit('setPage', (state.page += 1)) //this.page += 1
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _page: state.page, // this.page
                  _limit: state.limit, //this.limit
               },
            })
            commit('setTotalPages'.Math.ceil(response.headers['x-total-count'] / this.limit)) // this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            commit('setPosts', [...this.posts, ...response.data]) // this.posts = [...this.posts, ...response.data]
         } catch (err) {
            alert('Ошибка')
         }
      },
   },
}

import { createStore } from 'vuex'
import postModul from './postModul'

const store = createStore({
   modules: {
      post: postModul,
   },
})
export default store

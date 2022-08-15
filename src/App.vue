<template>
   <navbar></navbar>
   <div class="all">
      <router-view></router-view>
   </div>
</template>
<script>
import Navbar from '@/components/UI/Navbar'
export default {
   components: {
      Navbar,
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

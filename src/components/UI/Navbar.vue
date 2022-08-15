<template>
   <div class="navbar">
      <div @click="$router.push('/')" class="heard"><strong>My Project on VUE technology</strong></div>
      <div class="navbar__btns">
         <my-button @click="$router.push('/posts')">Все посты</my-button>
         <my-button @click="$router.push('/about')">О нас</my-button>
         <my-button @click="$router.push('/store')">store</my-button>
      </div>
   </div>
</template>
<script>
export default {}
</script>
<style>
.navbar {
   height: 50px;
   background-color: teal;
   box-shadow: 2px 2px 4px gray;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 15px;
}
.heard {
   font-size: 24px;
}
</style>

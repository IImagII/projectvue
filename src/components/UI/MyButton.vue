<template>
   <button class="btn">
      <slot></slot>
   </button>
</template>
<script>
export default { name: 'my-button' }
</script>
<style scoped>
.btn {
   align-self: flex-end;
   padding: 10px 15px;
   color: teal;
   border: 1px solid teal;
   margin: 10px;
}
</style>

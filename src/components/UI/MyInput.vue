<template>
   <input :value="value" @input="updateInput" type="text" class="input" />
</template>
<script>
export default {
   name: 'MyInput',
   props: {
      value: [String, Number],
   },
   methods: {
      updateInput(e) {
         this.$emit('update:value', e.target.value)
      },
   },
}
</script>
<style>
.input {
   max-width: 100%;
   border: 1px solid teal;
   padding: 10px 15px;
   margin-bottom: 10px;
}
</style>

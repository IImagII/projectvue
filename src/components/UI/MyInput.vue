<template>
   <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>
<script>
export default {
   name: 'MyInput',
   props: {
      modelValue: [String, Number],
   },
   methods: {
      updateInput(e) {
         this.$emit('update:modelValue', e.target.value)
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

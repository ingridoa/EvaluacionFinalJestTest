<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" name="content">
    <button type="submit">Sent</button>
  </form>
</template>

<script>
  export default {
    name: 'ChildComponent',
    methods: {
      handleSubmit(event) {
        const content = event.target.content.value;
        this.$emit('receiveContent', content);
        event.target.reset();
      }
    }
  }
</script>

<style>
</style>
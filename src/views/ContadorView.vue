
<template>
    <div class="counter-container">
      
      <p>contador: {{ count }}</p>
      <div>
        <!-- <button @click="decrement">➖</button> -->
        <button @click="increment">➕</button>
      </div>
    </div>
    
  </template>
  <script>
 export default {
    name: 'CounterComponent',
    computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
  };
  </script>
  <style scoped>
  .counter-container {
    border: 1px solid rgb(112, 112, 112);
    border-radius: 15px;
    padding: 1rem;
  }
  </style>
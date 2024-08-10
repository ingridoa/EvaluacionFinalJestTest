<template>
  <ChildComponent @receive-content="processContent"/>
  <h1>Content received: {{ receivedContent }}</h1>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  data() {
    return {
      receivedContent: '',
    }
  },
  methods: {
    processContent(content) {
      this.receivedContent = content;
    }
  }
}
</script>

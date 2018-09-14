<template>
  <div class="alert alert-success" role="alert">
    <h3 class="success">Correct!</h3>
    <p>Great job!</p>
    <button
      @click="startAgain"
      class="btn btn-success btn-lg">Next question</button>
  </div>
</template>

<script>
  import EventBus from '../eventBus';
  export default {
    methods: {
      startAgain() {
        EventBus.$emit('startOver');
      }
    }
  }
</script>

<style scoped>
  .alert {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .alert h3 {
    font-size: 2.5rem;
    font-weight: bold;
  }
</style>

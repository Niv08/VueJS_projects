<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ ex }}</h2>
    </div>
    <div class="card-body">
      <app-options :answer="answer" :options="optionsArr"></app-options>
    </div>
  </div>
</template>

<script>
  import { parse } from '../parseEx';
  import Options from './Options';

  export default {
    components: {
      'app-options': Options
    },
    mixins: [parse],
    data() {
      return {
        ex: ''
      };
    },
    created() {
      this.generateEx();
    }
  }
</script>

<style scoped>
  .card-header {
    text-align: center;
  }

  h2 {
    font-weight: bold;
  }
</style>

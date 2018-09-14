<template>
  <ul class="list-group">
    <li v-for="(o, index) in optionsArr"
        :key = "index"
        @click="checkAnswer(o)"
        class="list-group-item">{{ o }}</li>
  </ul>
</template>

<script>
  import EventBus from '../eventBus';

  export default {
    computed: {
      optionsArr() {
        return this.options;
      }
    },
    props: {
      answer: Number,
      options: Array
    },
    methods: {
      checkAnswer(a) {
        if (a === this.answer) EventBus.$emit('win');
        else EventBus.$emit('wrong');
      }
    }
  }
</script>

<style scoped>
  li:hover {
    background-color: rgba(92,184,92,.1);
    cursor: pointer;
  }
</style>

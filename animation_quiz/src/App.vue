<template>
  <div id="app" class="container">
    <div class="row">
      <div class="offset-lg-2 col-lg-8">
        <transition
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX" mode="out-in">
          <component :is="selectedComp"></component>
        </transition>
        <transition
          @after-enter="clearWrong"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOut" mode="out-in">
          <div class="alert alert-warning" v-if="wrong">Wrong! Try again.</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './components/Question'
import Correct from './components/Correct'
import Options from './components/Options'
import EventBus from './eventBus';

export default {
  name: 'App',
  data() {
    return {
      wrong: false,
      selectedComp: 'appQuestion'
    };
  },
  components: {
    'appQuestion': Question,
    'appCorrect': Correct,
    'appOptions': Options
  },
  methods: {
    clearWrong() {
      setTimeout(function () {
        this.wrong = false;
      }.bind(this), 300)
    }
  },
  mounted() {
    EventBus.$on('win', function() {
      this.wrong = false;
      this.selectedComp = 'appCorrect';
    }.bind(this));
    EventBus.$on('startOver', () => (this.selectedComp = 'appQuestion'));
    EventBus.$on('wrong', () => (this.wrong = true));
  }
}
</script>

<style scoped>
  .container {
    padding: 2rem 0;
  }

  div.alert {
    margin: 1rem 0;
  }
</style>

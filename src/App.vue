<template>
  <div id="app">
    <BlackJack/>
  </div>
</template>

<script>
import BlackJack from './components/BlackJack.vue'

export default {
  name: 'App',
  components: {
    BlackJack,
  }
}
</script>

<style>

#app {
  font-family: sans-serif;
}

.flex {
  display: block;
}

.w-100 {
  width: 800px
}

</style>

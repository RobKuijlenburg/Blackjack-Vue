<template>
  <div id="app">
    <BlackJack/>
    <div class="block w-100">
      <div>
        <Dealer/>
      </div>

      <div class="left">
        <Player/>
      </div>

    </div>

  </div>
</template>

<script>
import BlackJack from './components/BlackJack.vue'
import Player from './components/Player.vue'
import Dealer from './components/Dealer.vue'

export default {
  name: 'App',
  components: {
    BlackJack,
    Player,
    Dealer
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

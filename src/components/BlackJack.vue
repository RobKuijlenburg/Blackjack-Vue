<template>
  <div>
    <button @click="createDeck">Create</button>
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
import Player from './Player.vue'
import Dealer from './Dealer.vue'

export default {
  name: 'BlackJack',

  components: {
    Player,
    Dealer
  },

  methods:{

    createDeck() {
      this.$store.dispatch('spawnDeck')
    },

    hitMe() {
      this.$store.dispatch('hitMe');
    },

    stay(){
      let dealerScore = this.$store.getters.getDealerScore;
      let playerScore = this.$store.getters.getPlayerScore;
      console.log(dealerScore);
      while (dealerScore < 16) {
        if (dealerScore < 16) {
          this.$store.dispatch('stay');
        } else if (dealerScore === 16 && playerScore === 16) {
          break;
        } else if (dealerScore > 16) {
          break;
        }
      }
    }

  },

  computed: {

    showDeck(){
      return this.$store.state.deck;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

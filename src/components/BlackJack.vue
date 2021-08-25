<template>
  <div>
    <button @click="createDeck">Create</button>
      <div class="block w-100">
        <span>{{checkPlayerCondition}}</span>  
        <span>{{this.message}}</span>
      <div>
        <Dealer :spawnDeck="spawnDeck"/>
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

  data: function(){
    return {
      message: '',
      spawnDeck: false
    }
  },

  created(){
    this.$store.dispatch('spawnDeck');
  },

  methods:{
    createDeck() {
      this.spawnDeck = false;
      this.message = '';
      this.$store.dispatch('spawnDeck');
    },

    hitMe() {
      this.$store.dispatch('hitMe');
      for (let i = 0; i < this.$store.getters.getPlayer.length; i++) {
        if (this.playerScore > 21 && this.$store.getters.getPlayer[i].Waarde === "A") {
            this.$store.dispatch('aasmanipPlayer');
        }
      }
      setTimeout(() => {this.checkPlayerCondition;}, 100);
    },

    stay(){
      this.spawnDeck = true;
      while (this.dealerScore < 16) {
        if (this.dealerScore < 16) {
          this.$store.dispatch('stay');
            for (let i = 0; i < this.$store.getters.getDealer.length; i++) {
              if (this.dealerScore > 21 && this.$store.getters.getDealer[i].Waarde === "A") {
              this.$store.dispatch('aasmanipDealer');
              }
            }
        } else if (this.dealerScore === 16 && this.playerScore === 16) {
          break;
        } else if (this.dealerScore > 16) {
          break;
        }
      }
      setTimeout(() => {this.checkWin();}, 200);  
    },
  

    checkWin() {
      if (this.playerScore > this.dealerScore || this.dealerScore > 21){
        this.playerWinScore += 1;
        return this.message = 'Player 1 Wins';
      } else if (this.playerScore < this.dealerScore){
        this.dealerWinScore += 1;
        return this.message = 'Dealer Wins';
      } else if (this.playerScore === this.dealerScore) {
        return this.message = 'Draw';
      }
    },

  },

  computed: {

    checkPlayerCondition() {
      console.log(this.playerScore);
      if (this.playerScore === 21){
        return 'Black Jack. Player 1 wins!!'
      } else if(this.playerScore > 21 || this.$store.getters.getPlayer.length > 5) {
        return 'Player 1 busts';
      }
      return ''
    },

    dealerScore(){ return this.$store.getters.getDealerScore},
    playerScore(){ 
      return this.$store.getters.getPlayerScore},
    showDeck(){
      return this.$store.state.deck;
    },
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

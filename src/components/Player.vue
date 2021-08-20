<template>
  <div class="f-left">
      <h2>Player</h2>
      <p>{{countScore}}</p>
        <div>
        <div class="card" v-for="player in showPlayer" :key="player.id">
            <span>{{player.Soort}}</span>
            <span>{{player.Waarde}}</span>
        </div>
        </div>
        <button @click="hitMe()">Hit</button>
        <button @click="stay()">Stay</button>
  </div>
</template>

<script>
export default {
  name: 'Player',

    methods: {
        hitMe() {
            this.$store.dispatch('hitMe');
        },

        stay(){
            this.$store.dispatch('stay');
        },


    },

    computed: {
        showPlayer(){
            return this.$store.getters.getPlayer;
        },

        countScore() {
            let playerScore = this.$store.getters.getPlayer.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.Value;
            }, 0);
            return playerScore;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.f-left {
    float: left;
}

.card {
    width: 50px;
    height: 80px;
    padding: 10px;
    border: solid 3px #808080;
    background-color: white;
    display: inline-block;
    border-radius: 10px;
    font-size: 10pt;
    text-align: center;
    margin: 3px;
}

</style>

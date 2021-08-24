<template>
  <div class="f-left">
      <h2>Player</h2>
      <p>{{showScore}}</p>
        <div>
        <div class="card" v-for="player in showPlayer" :key="player.id">
            <span class="icoon" v-html="player.Icon"></span>
            <span>{{player.Waarde}}</span>
        </div>
        <div class="buttons">
            <button @click="hitMe()">Hit</button>
            <button @click="stay()">Stay</button>
        </div>
        </div>


  </div>
</template>

<script>
export default {
  name: 'Player',

    methods: {
        hitMe(){
            this.$parent.hitMe();
        },

        stay(){
            this.$parent.stay();
        }
    },

    computed: {
        showPlayer(){
            return this.$store.getters.getPlayer;
        },

        showScore(){
            return this.$store.getters.getPlayerScore;
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

.icoon {
    font-size: 1.2rem;
}

.buttons {
    margin-top: 20px;
}
</style>

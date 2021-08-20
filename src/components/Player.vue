<template>
  <div class="f-left">
      <h2>Player</h2>
        <div class="card" v-for="player in showPlayer" :key="player.id">
            <span>{{player.Soort}}</span>
            <span>{{player.Waarde}}</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
    computed: {
        showPlayer(){
            return this.$store.getters.getPlayer;
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

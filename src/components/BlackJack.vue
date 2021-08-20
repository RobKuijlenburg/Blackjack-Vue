<template>
  <div>
    <button @click="createDeck">Create</button>
    <ul>
      <li v-for="deck in showDeck" :key="deck.id">{{deck.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlackJack',

  methods:{

    createDeck() {
      this.$store.dispatch('spawnDeck')
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

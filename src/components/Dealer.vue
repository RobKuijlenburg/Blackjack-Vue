<template>
    <div class="f-right">
        <h2>Dealer</h2>
        <p v-if="spawnDeck" >{{showScore}}</p>
        <p v-else><span v-if="showDealer[0]">{{showDealer[0].Value}}</span></p>
        <div class="card" v-for="(dealer, i) in showDealer" :key="dealer.id" >
            <span class="icoon" v-if="spawnDeck || i == 0" v-html="dealer.Icon"></span>
            <span class="icoon" v-else v-html="'&#63;'"></span>
            <span v-if="spawnDeck || i == 0">{{dealer.Waarde}}</span>
            <span v-else>?</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Dealer',

    props: {
        spawnDeck: Boolean
    },

    computed: {
        showDealer(){
            return this.$store.getters.getDealer;
        },

        showScore(){
            return this.$store.getters.getDealerScore;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f-right {
    float: right;
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
</style>

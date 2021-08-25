import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        soort: ["Harten", "Schoppen", "Ruiten", "Klaveren"],
        icoon: ["&hearts;", "&spades;", "&diams;", "&clubs;"],
        waarden: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "V", "H", "A"],
        deck: [],
        dealer: [],
        player: []
    },

    mutations: {
        clearDeck(state){
            state.deck = [],
            state.dealer = [],
            state.player = []
        },

        createDeck(state){
            state.deck = new Array();
            for (let i = 0; i < state.waarden.length; i++) {
                for (let x = 0; x < state.soort.length; x++) {
                    let value = parseInt(state.waarden[i]);
                    if (state.waarden[i] === "B" || state.waarden[i] === "V" || state.waarden[i] === "H") {
                        value = 10
                    }
                    if (state.waarden[i] == "A") {
                        value = 11
                    }
                    const card = {
                        Waarde: state.waarden[i],
                        Soort: state.soort[x],
                        Icon: state.icoon[x], 
                        Value: value
                    }
                    state.deck.push(card);
                }
            }
        },

        shuffleDeck(state){
            for (let i = 0; i < state.deck.length; i++) {
                let locatie1 = Math.floor((Math.random() * state.deck.length));
                let locatie2 = Math.floor((Math.random() * state.deck.length));
                let tmp = state.deck[locatie1];
                state.deck[locatie1] = state.deck[locatie2];
                state.deck[locatie2] = tmp;
            }
        },

        deal(state){
            for (let i = 0; i < 2; i++) {
                state.player.push(state.deck[0])
                state.deck.shift()
                state.dealer.push(state.deck[0])
                state.deck.shift()
            }
        },     
        
        hitMe(state){
            state.player.push(state.deck[0]);
            state.deck.shift();
        },
        
        stay(state){
            state.dealer.push(state.deck[0]);
            state.deck.shift();   
        },

        aasmanipPlayer(state){
            for (let i = 0; i < state.player.length; i++){
                if(state.player[i].Waarde === "A"){
                    state.player[i].Value = 1;
                }
            } 
        },

        aasmanipDealer(state){
            for (let i = 0; i < state.dealer.length; i++){
                if(state.dealer[i].Waarde === "A"){
                    state.dealer[i].Value = 1;
                }
            } 
        }
    },

    getters: {
        getPlayer(state) {
            return state.player;
        },

        getDealer(state){
            return state.dealer;
        },

        getPlayerScore(state) {
            return state.player.reduce(function (accumulator, currentValue) { 
                return accumulator + currentValue.Value; }, 
            0)            
        },

        getDealerScore(state) {
            return state.dealer.reduce(function (accumulator, currentValue) { 
                return accumulator + currentValue.Value; }, 
            0)            
        }
    },

    actions: {
        spawnDeck(context) {
            context.commit('clearDeck')
            context.commit('createDeck')
            setTimeout(() => {context.commit('shuffleDeck')}, 200);
            setTimeout(() => {context.commit('deal')}, 400);
        },

        hitMe(context){
            context.commit('hitMe');
        },

        stay(context){
            context.commit('stay');
        },

        aasmanipPlayer(context){
            context.commit('aasmanipPlayer');
        },

        aasmanipDealer(context){
            context.commit('aasmanipDealer');
        }
    },
})
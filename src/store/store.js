import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        soort: ["Harten", "Schoppen", "Ruiten", "Klaveren"],
        waarden: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "V", "H", "A"],
        deck: [],
        dealer: [],
        player: []
    },

    mutations: {
        clearDeck(state){
            state.deck = []
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
        }
        
    },

    getters: {
        
    },

    actions: {
        spawnDeck(context) {
            context.commit('clearDeck')
            context.commit('createDeck')
            setTimeout(() => {context.commit('shuffleDeck')}, 200);
        }
    }

})
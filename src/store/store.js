import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        deck: {name: 'pancakes', value: 22},
        dealer: {name: 'John', value: 0},
        player: {name: 'Jack', value: 5}
    },

    mutations: {

    },

    getters: {
        
    },

    actions: {

    }

})